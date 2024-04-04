import express from "express";

// Imports route api
import sampleApi from "./controller/sample.js";
import recipeApi from "./controller/recipeController.js";
import mealPlanApi from "./controller/mealPlanController.js";

const api = express.Router();

api.use("/sample", sampleApi);
api.use("/recipes", recipeApi);
api.use("/mealPlans", mealPlanApi);

export default api;
