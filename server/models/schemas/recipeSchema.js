import { mongoose } from "mongoose";
import ingredientSchema from "./ingredientSchema.js";
import equipmentSchema from "./equipmentSchema.js";

const recipeSchema = new mongoose.Schema({
  ingredients: [ingredientSchema],
  equipments: [equipmentSchema],
  servings: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number, // Optional parameter
  },
});
export default recipeSchema;
