import { mongoose } from "mongoose";
import equipmentSchema from "./schemas/equipmentSchema";
import MealPlan from "./mealPlan";
const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  mealPlan: [MealPlan],
});

const User = mongoose.model("user", user);

export default User;
