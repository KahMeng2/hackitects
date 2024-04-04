import { mongoose } from "mongoose";
import recipeSchema from "./schemas/recipeSchema.js";

const Recipe = mongoose.model("recipe", recipeSchema);

export default Recipe;
