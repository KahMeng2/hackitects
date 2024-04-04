import { mongoose } from "mongoose";

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
  },
});
export default ingredientSchema;
