import express from "express";
import { mongoose } from "mongoose";
import dotenv from "dotenv";

// Import api routes
import api from "./routes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.use("/api", api);
// Connects to database
const conn = mongoose
  .connect(process.env.CONNECTION_URL)
  .catch((error) => console.log(`${error} did not connect`));

app.listen(3000, () =>
  console.log(`Server Running on Port: http://localhost:${3000}`)
);
