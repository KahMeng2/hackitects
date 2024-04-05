import Ingredient from "../models/ingredients.js";
import express from "express";

const ingredientApi = express.Router();

// http://localhost:3000/api/ingredients link

// Helper functions to find ingredients
async function findIngredient(req, res, next) {
  let ingredient;
  console.log(req.params.id);
  try {
    ingredient = await Ingredient.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ message: "Cannot find ingredient" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
  res.ingredient = ingredient;
  next();
}

// The endpoints are below

// GET /api/ingredients
// Gets all ingredients
// Example: /ingredients?filter[field]=value&sort=field:asc
ingredientApi.get("/allIngredients", async (req, res) => {
  try {
    let query = {};

    // Filtering
    // Example: Filter by primaryType (primaryType)
    for (const key in req.query.filter) {
      query[key] = req.query.filter[key];
    }

    // Sorting
    // Example: Sort primaryType by asc (primaryType:asc)
    // Example: Sort ingredientType by desc (ingredientType:desc)
    let sort = {};
    if (req.query.sort) {
      const [field, order] = req.query.sort.split(":");
      sort[field] = order === "asc" ? 1 : -1;
    }

    const items = await Ingredient.find(query).sort(sort);
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Endpoint for autocomplete suggestions for ingredients
ingredientApi.get("/autocomplete", async (req, res) => {
  try {
    // Extract the search query from the request query parameters
    const { name } = req.query;
    console.log(req.query);
    // Perform a case-insensitive search for ingredients that start with the query
    const ingredients = await Ingredient.find({
      primaryType: { $regex: `^${name}`, $options: "i" },
    }).select("primaryType");

    res.json(ingredients); // Send the list of ingredient names as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Stores new ingredients
ingredientApi.post("/addIngredient", async (req, res) => {
  console.log(req.body);
  const ingredient = new Ingredient({
    ingredientType: req.body.ingredientType,
    primaryType: req.body.primaryType,
    subType: req.body.subType,
    unit: req.body.unit,
  });
  try {
    const newIngredient = await ingredient.save();
    res.status(200).json(newIngredient);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
});

// Gets ingredient by id
ingredientApi.get("/:id", findIngredient, (req, res) => {
  try {
    res.status(200).json(res.ingredient);
  } catch (e) {
    console.log(e);
    res.status(404).end();
  }
});

// Deletes ingredient
ingredientApi.delete("/:id", findIngredient, async (req, res) => {
  try {
    await res.ingredient.deleteOne();
    res.status(200).json({ message: "Deleted ingredient" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

export default ingredientApi;
