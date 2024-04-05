import express from "express";
import User from "../models/user.js";
import MealPlan from "../models/mealPlan.js";
const userApi = express.Router();

// http://localhost:3000/api/user

async function findUser(req, res, next) {
  let user;
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

// Gets user from id
userApi.get("/:id", findUser, (req, res) => {
  try {
    res.status(200).json(res.user);
  } catch (e) {
    console.log(e);
    res.status(404).end();
  }
});

// Gets two latest meal plans from user data.
userApi.get("/getLatestTwoMealPlans/:id", findUser, async (req, res) => {
  try {
    // Get the user from the middleware
    const user = res.user;
    // Find the latest 2 meal plans for the user

    const newestMealPlans = await MealPlan.find({
      _id: { $in: user.mealPlans },
    });
    // Bad hack do not use
    // Send the response with the newest meal plans
    res.json(
      newestMealPlans.sort((a, b) => a.createdAt - b.createdAt).slice(0, 2)
    );
  } catch (error) {
    console.error("Error fetching meal plans:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Creates user
userApi.post("/newUser", async (req, res) => {
  const user = new User({
    username: req.body.username,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
});

// Assign a meal plan to current user
userApi.patch("/addMealPlan/:id", findUser, async (req, res) => {
  const mealPlan = res.user.mealPlans;
  const newMealPlan = req.body.mealPlans;
  const id = req.params.id;
  mealPlan.push(newMealPlan);
  try {
    // Find the recipe by ID and update it
    const updateUser = await User.findByIdAndUpdate(
      id, // Recipe ID
      {
        // Update fields
        $set: {
          mealPlans: mealPlan,
        },
      },
      {
        // Options
        new: true, // Return the updated document
      }
    );

    if (!updateUser) {
      return res.status(404).json({ message: "user not found" });
    }
    res.json(updateUser); // Send the updated recipe as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default userApi;
