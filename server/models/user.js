import { mongoose } from "mongoose";
import equipmentSchema from "./schemas/equipmentSchema";

const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  equipment: [equipmentSchema],
});

const User = mongoose.model("user", user);

export default User;
