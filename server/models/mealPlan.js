import { mongoose } from "mongoose";
import ingredientSchema from "./schemas/ingredientSchema.js";
import recipeSchema from "./schemas/recipeSchema.js";

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

const MealPlan = mongoose.model("mealPlan", mealPlanSchema);

export default MealPlan;
