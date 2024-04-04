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

const equipmentSchema = new mongoose.Schema({
  equipment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Equipment",
    required: true,
  },
});

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

const Recipe = mongoose.model("recipe", recipeSchema);

export default Recipe;
