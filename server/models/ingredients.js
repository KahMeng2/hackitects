import mongoose from "mongoose";
import { Units } from "../enums/units";
import { IngredientTypes } from "../enums/IngredientTypes";

const ingredientSchema = new mongoose.Schema({
  ingredientType: {
    type: String,
    enum: IngredientTypes,
    required: true,
  },
  primaryType: {
    type: String,
    required: true,
  },
  subType: {
    type: String,
  },
  units: {
    type: String,
    required: true,
    enum: Units,
  },
});

// Creating index for the primaryType, and subType
ingredientSchema.index({ primaryType: 1, subType: 1 }, { unique: true });

// Create the Ingredient model from the schema
const Ingredient = mongoose.model("Ingredient", ingredientSchema);

export default Ingredient;
