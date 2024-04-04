import express from "express";

// Imports route api
import sampleApi from "./controller/sample.js";

const api = express.Router();

api.use("/sample", sampleApi);

export default api;
