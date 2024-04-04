import { mongoose } from "mongoose";

import equipmentSchema from "./schemas/equipmentSchema.js";

const equipment = mongoose.model("equipment", equipmentSchema);

export default equipment;
