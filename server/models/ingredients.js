import mongoose from "mongoose";

const IngredientTypes = Object.freeze({
    Poultry: 'Poultry',
    Fruits: 'Fruits',
    Meats: 'Meats',
    Dairy: 'Dairy',
    Fish: 'Fish',
    Seafood: 'Seafood',
    Herbs_Spices: 'Herbs and Spices',
    Sugar_Sweeteners: 'Sugar and Sweeteners',
    Baking: 'Baking',
    Pasta: 'Pasta',
    Oils_Vinegars: 'Oils and Vinegars',
    Canned_Food: 'Canned Food',
    Soups_Stocks: 'Soups and Stocks',
  })

const ingredientSchema = new mongoose.Schema({
    ingredientType: {
    type: String,
    enum : IngredientTypes,
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
    type: Number,
    default: 1.0,
    },
});

// Creating index for the primaryType, and subType
ingredientSchema.index({ primaryType: 1, subType: 1 }, { unique: true });

// Create the Ingredient model from the schema
const Ingredient = mongoose.model('Ingredient', ingredientSchema);
   
export default Ingredient;