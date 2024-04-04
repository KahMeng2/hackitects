import { mongoose } from "mongoose";

const equipmentSchema = new mongoose.Schema({
  equipment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Equipment",
    required: true,
  },
});
export default equipmentSchema;
