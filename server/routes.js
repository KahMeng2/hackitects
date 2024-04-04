import express from "express";

// Imports route api
import sampleApi from "./controller/sample.js";
import recipeApi from "./controller/recipeController.js";
import ingredientApi from "./controller/ingredientController.js";

const api = express.Router();

api.use("/sample", sampleApi);
api.use("/recipe", recipeApi);
api.use("/ingredients", ingredientApi);

export default api;
