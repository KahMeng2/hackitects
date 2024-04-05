import { mongoose } from "mongoose";
import { Units } from "../../enums/units.js";
// NOTE: This is not the database model. This is the ingredient model for
const ingredientSchema = new mongoose.Schema({
  ingredient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ingredient",
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
    enum: Units,
  },
});
export default ingredientSchema;
