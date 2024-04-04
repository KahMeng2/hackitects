import Recipe from "../models/recipe.js";
import express from "express";

const recipeApi = express.Router();

// http://localhost:3000/api/recipe link

// Helper functions to find recipes
async function findrecipe(req, res, next) {
  let recipe;
  console.log(req.params.id);
  try {
    recipe = await recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Cannot find recipe" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
  res.recipe = recipe;
  next();
}

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

// Stores new recipes
recipeApi.post("/addRecipe", async (req, res) => {
  console.log(req.body);
  const recipe = new Recipe({
    ingredients: req.body.ingredients,
    equipments: req.body.equipments,
    servings: req.body.servings,
    duration: req.body.duration,
  });
  try {
    const newRecipe = await recipe.save();
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
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

export default recipeApi;
