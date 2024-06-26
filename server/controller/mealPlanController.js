// TODO: add code to add a meal plan. Might have two different types of add a meal plan.
// Maybe one end point is to save a temporary meal plan.
// Get meal plan.
// Another end point is to generate a meal plan
import MealPlan from "../models/mealPlan.js";
import express from "express";
import Recipe from "../models/recipe.js";
import { findOptimalPlan } from "../helpers/mealPlanGenerator.js";

const mealPlanApi = express.Router();

// http://localhost:3000/api/mealPlans link

// Helper functions to find recipes
async function findMealPlan(req, res, next) {
  let mealPlan;
  try {
    mealPlan = await MealPlan.findById(req.params.id);
    if (!mealPlan) {
      return res.status(404).json({ message: "Cannot find meal plan" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
  res.mealPlan = mealPlan;
  next();
}

export default mealPlanApi;

// test
mealPlanApi.get("/", (req, res) => {
  res.send("Successful response.");
});

// Gets recipes
mealPlanApi.get("/:id", findMealPlan, (req, res) => {
  try {
    res.status(200).json(res.mealPlan);
  } catch (e) {
    console.log(e);
    res.status(404).end();
  }
});

// current mealplan id (sample Logic in front end)
// The flow 1. Initialise in the meal plan. send the meal plan id as a params to the component
// mealpla.id ? (post) : (patch)
// Initialises the meal plan. Should check if a meal plan exists first.
mealPlanApi.post("/initialiseMealPlan", async (req, res) => {
  const mealPlan = new MealPlan({
    ingredients: req.body.ingredients,
    generated: false,
  });
  try {
    const newMealPlan = await mealPlan.save();
    res.status(201).json(newMealPlan);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
});

// Updates a meal plan. Used to save ingredients that have been added by the user
mealPlanApi.patch("/updateMealPlan/:id", async (req, res) => {
  const { id } = req.params;
  const { ingredients } = req.body;
  const generated = false;
  const createdAt = new Date();
  try {
    // Find the recipe by ID and update it
    const updateMealPlan = await MealPlan.findByIdAndUpdate(
      id, // Recipe ID
      {
        // Update fields
        $set: {
          ingredients,
          generated,
          createdAt,
        },
      },
      {
        // Options
        new: true, // Return the updated document
      }
    );

    if (!updateMealPlan) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json(updateMealPlan); // Send the updated recipe as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Create meal plan: Generates the meal plan based on the
mealPlanApi.patch("/generateMealPlan/:id", async (req, res) => {
  // Gets the list of ingredients to be used in the algo
  const ingredients = req.body.ingredients;
  const serving = req.body.servings;
  const { id } = req.params;

  // Gets list of recipes
  const recipeList = await Recipe.find();
  // Uses the function to get the list of TODO: ADD MORE SHIT
  const [generatedMealPlan, remainingIngredients] = findOptimalPlan(
    ingredients,
    recipeList,
    serving
  );
  const createdAt = new Date();
  try {
    // Find the recipe by ID and update it
    const updates = {
      $set: {
        mealPlans: generatedMealPlan,
        generated: true,
        createdAt: createdAt,
      },
    };
    const updateMealPlan = await MealPlan.updateOne(
      { _id: id }, // Filter to find the meal plan
      updates // Updates to be applied
    );

    if (!updateMealPlan) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json({
      id: id,
      initialIngredients: ingredients,
      remainingIngredients: remainingIngredients,
      generatedMealPlan: generatedMealPlan,
      date: createdAt,
    }); // Send the updated recipe as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
