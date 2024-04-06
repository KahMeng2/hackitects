// Helper function to check if current meal plan still has enough ingredients to cook the selected recipe.
// returns ingredients if it can be cooked, returns null if it cannot be cooked
function isCookable(mealPlanIngredients, recipeIngredients, ratio) {
  const adjustedIngredients = [];

  // Create a map to store available ingredients and their quantities
  const availableIngredientsMap = new Map();

  // Populate the map with ingredients from the meal plan
  mealPlanIngredients.forEach((ingredient) => {
    availableIngredientsMap.set(
      ingredient.ingredient.toString(),
      ingredient.volume
    );
  });

  // Iterate through the recipe ingredients
  for (const recipeIngredient of recipeIngredients) {
    const ingredientId = recipeIngredient.ingredient.toString();
    // required volume depends on ratio
    const requiredVolume = ratio * recipeIngredient.volume;
    const availableVolume = availableIngredientsMap.get(ingredientId);

    // If the required ingredient is not available or the available volume is less than required
    // Currently very strict, but maybe we can have some looser acceptance criteria later on.
    if (!availableVolume || availableVolume < requiredVolume) {
      // If not enough, return null to indicate insufficient ingredients
      return null;
    } else {
      // Adjust the volume and add the ingredient with adjusted volume to the list
      const adjustedVolume = availableVolume - requiredVolume;
      adjustedIngredients.push({
        ingredient: ingredientId,
        volume: adjustedVolume,
        unit: recipeIngredient.unit,
      });
    }
  }
  // Return the adjusted list of ingredients
  return adjustedIngredients;
}
// Gets all possible meal plans and returns the best meal plan based on %usage of ingredientlist.
// Possible to return more than one meal plan
function findBestMealPlan(possibleMealPlans, ingredients) {
  // TODO: Test separately
  var bestUsage = 0.0;
  var bestMealPlan;
  var bestRemainingIngredients;
  const originalIngredientsMap = new Map();

  // Populate the map with ingredients from the meal plan
  ingredients.forEach((ingredient) => {
    originalIngredientsMap.set(
      ingredient.ingredient.toString(),
      ingredient.volume
    );
  });
  // Iterate through all meal plans and their remaining ingredients.
  possibleMealPlans.map((possibleMealPlan) => {
    const [curMealPlan, remainingIngredients] = possibleMealPlan;
    var accumulatedProbs = 0;
    // Is the length of initial ingredient the same as remaining ingredients?
    const lenIngredients = remainingIngredients.length;
    // For each meal plan's remaining ingredients, count the percentage that it is used up
    for (const remainingIngredient of remainingIngredients) {
      const ingredientId = remainingIngredient.ingredient.toString();
      const remainingVolume = remainingIngredient.volume;
      const initialVolume = originalIngredientsMap.get(ingredientId);
      // Calculate the usage of the ingredient
      if (initialVolume != 0) {
        accumulatedProbs += 1 - remainingVolume / initialVolume;
      }
    }
    const curUsage = accumulatedProbs / lenIngredients;
    // Checks if there is a better meal plan
    if (curUsage >= bestUsage) {
      bestUsage = curUsage;
      bestMealPlan = curMealPlan;
      bestRemainingIngredients = remainingIngredients;
    }
  });
  // Keep track of which is the best meal plan(s) so far.
  // return solution list and the remaining ingredients
  return [bestMealPlan, bestRemainingIngredients];
}

// Helper function to check %usage of original ingredient list
export function findOptimalPlan(ingredients, recipes, serving) {
  // possible meal plans holds a list of (mealPlan, remainingIngredients).
  // Where a meal plan is a list of recipes that can be cooked by the initial list of ingredients
  const possibleMealPlans = [];
  //console.log("Recipes are HERE", recipes);
  // Step 1: For each recipe in the recipe list
  recipes.map((recipe) => {
    // ratio to adjust the ingredient volume
    var ratio;
    const selectedRecipe = recipe;
    if (serving) {
      ratio = serving / recipe.servings;
      selectedRecipe.servings = serving;
      adjustVolume(selectedRecipe, ratio);
    } else {
      ratio = 1;
    }

    // Step 2: Iterate through list of possible Meal Plans, and check if remaining ingredients can cook the recipe.
    // If cookable, append to the particular possibleMealPlans list
    possibleMealPlans.map((possibleMealPlan) => {
      const [curMealPlan, remainingIngredients] = possibleMealPlan;
      // Use a helper function to check
      const mealPlanIngredients = remainingIngredients;
      const recipeIngredients = selectedRecipe.ingredients;

      const adjustedIngredients = isCookable(
        mealPlanIngredients,
        recipeIngredients,
        ratio
      );
      if (adjustedIngredients) {
        curMealPlan.push(selectedRecipe);
        possibleMealPlan[1] = adjustedIngredients;
      }
      return possibleMealPlan;
    });
    // Step 3: Check if the full list of ingredients can cook the current recipe, if so, add it as a new possible solution.
    const adjustedIngredients = isCookable(
      ingredients,
      selectedRecipe.ingredients,
      ratio
    );
    // If recipe can be cooked with ingredient set
    if (adjustedIngredients) {
      const newMealPlan = [[selectedRecipe], adjustedIngredients];
      possibleMealPlans.push(newMealPlan);
    }
    return recipe;
  });
  // Step 4: After finishing. Run an algo to check which is optimal and return the most optimal solutions
  return findBestMealPlan(possibleMealPlans, ingredients);
}
// Helper function for adjusting ingredients in recipe to ratio
function adjustVolume(recipe, ratio) {
  const ingredientList = recipe.ingredients;
  ingredientList.map((ingredient) => {
    ingredient.volume = ingredient.volume * ratio;
    ingredient.volume = ingredient.volume.toFixed(2);
    return ingredient;
  });
}
