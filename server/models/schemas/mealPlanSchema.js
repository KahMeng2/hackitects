import ingredientSchema from "./ingredientSchema.js";
import recipeSchema from "./recipeSchema.js";
import { mongoose } from "mongoose";

const mealPlanSchema = new mongoose.Schema({
  ingredients: [ingredientSchema],
  mealPlans: [recipeSchema],
  generated: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
export default mealPlanSchema;
