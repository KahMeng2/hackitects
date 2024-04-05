import { mongoose } from "mongoose";
import mealPlanSchema from "./schemas/mealPlanSchema.js";

const MealPlan = mongoose.model("mealPlan", mealPlanSchema);

export default MealPlan;
