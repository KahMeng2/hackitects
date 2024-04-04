import express from "express";

const sampleApi = express.Router();

sampleApi.get("/", (req, res) => {
  res.send("SampleApi successfully reached.");
});

export default sampleApi;
