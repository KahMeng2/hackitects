import { mongoose } from "mongoose";
import ingredientSchema from "./ingredientSchema.js";
import equipmentSchema from "./equipmentSchema.js";

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: Number,
  },
  description: {
    type: [String],
    required: true,
    text: true,
  },
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
