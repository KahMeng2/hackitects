import mongoose from "mongoose";
import { Units } from "../enums/units.js";
import { IngredientTypes } from "../enums/IngredientTypes.js";

const ingredientSchema = new mongoose.Schema({
  ingredientType: {
    type: String,
    enum: IngredientTypes,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  unit: {
    type: String,
    required: true,
    enum: Units,
  },
});

// Create the Ingredient model from the schema
const Ingredient = mongoose.model("Ingredient", ingredientSchema);

export default Ingredient;
