import Recipe from "../models/recipe.js";
import express from "express";

const recipeApi = express.Router();

// http://localhost:3000/api/recipes link

// Helper functions to find recipes
async function findrecipe(req, res, next) {
  let recipe;
  try {
    recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Cannot find recipe" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
  res.recipe = recipe;
  next();
}

// TODO: Helper function to check if ingredient/equipment is in database
// async function findIngredient()

// The endpoints are below
// Gets recipes
recipeApi.get("/:id", findrecipe, (req, res) => {
  try {
    res.status(200).json(res.recipe);
  } catch (e) {
    console.log(e);
    res.status(404).end();
  }
});

// Deletes recipe
recipeApi.delete("/:id", findrecipe, async (req, res) => {
  try {
    await res.recipe.deleteOne();
    res.status(200).json({ message: "Deleted recipe" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Updates new recipes
recipeApi.patch("/:id", async (req, res) => {
  const { id } = req.params; // Extract the recipe ID from the URL params
  const { ingredients, equipments, servings, duration } = req.body; // Extract updated data from the request body

  try {
    // Find the recipe by ID and update it
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id, // Recipe ID
      {
        // Update fields
        $set: {
          ingredients,
          equipments,
          servings,
          duration,
        },
      },
      {
        // Options
        new: true, // Return the updated document
      }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json(updatedRecipe); // Send the updated recipe as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Stores new recipes
recipeApi.post("/addRecipe", async (req, res) => {
  const recipe = new Recipe({
    ingredients: req.body.ingredients,
    equipments: req.body.equipments,
    servings: req.body.servings,
    duration: req.body.duration,
  });
  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
});

export default recipeApi;
