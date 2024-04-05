import { mongoose } from "mongoose";
import mealPlanSchema from "./schemas/mealPlanSchema.js";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  mealPlans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mealPlan",
      required: true,
    },
  ],
});

const User = mongoose.model("user", userSchema);

export default User;
