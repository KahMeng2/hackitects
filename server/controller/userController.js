import express from "express";
import User from "../models/user";
const userApi = express.Router();

// http://localhost:3000/api/ingredients

async function findUser(req, res, next) {
  let user;
  console.log(req.params.id);
  try {
    user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
  res.user = user;
  next();
}

userApi.get("/", (req, res) => {
  res.send("userApi successfully reached.");
});

userApi.get("/:id", findUser, (req, res) => {
  try {
    res.status(200).json(res.user);
  } catch (e) {
    console.log(e);
    res.status(404).end();
  }
});

userApi.get("/getLatestTwoMealPlans/:id", findUser, (req, res) => {
  res.send("userApi successfully reached.");
});

export default userApi;
