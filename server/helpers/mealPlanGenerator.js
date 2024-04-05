// Helper function to check if current meal plan still has enough ingredients to cook the selected recipe.
// returns ingredients if it can be cooked, returns null if it cannot be cooked
function isCookable(mealPlanIngredients, recipeIngredients) {
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
    const requiredVolume = recipeIngredient.volume;
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

export function findOptimalPlan(ingredients, recipes) {
  // Initialise variables
  // An array storing all solutions. A solution is a list of recipes and the remaining ingredient list.
  // possible meal plans holds a list of (mealPlan, remainingIngredients)
  possibleMealPlans = [];
  // Step 1: For each recipe in the recipe list
  recipes.map((recipe) => {
    // Step 2: Iterate through list of possible Meal Plans, and check if remaining ingredients can cook the recipe. If cookable, append to the particular possibleMealPlans list
    possibleMealPlans.map((possibleMealPlan) => {
      // Use a helper function to check
      const mealPlanIngredients = possibleMealPlan.ingredients;
      const recipeIngredients = recipe.ingredients;

      const adjustedIngredients = isCookable(
        mealPlanIngredients,
        recipeIngredients
      );
      // If recipe
      if (adjustedIngredients) {
        const { mealPlan, remainingIngredients } = possibleMealPlan;
      }
    });
  });

  // Step 3: Check if the full list of ingredients can cook the current recipe, if so, add it as a new possible solution.
  // Step 4: After finishing. Run an algo to check which is optimal and return the most optimal solutions
  // For each recipe
}
