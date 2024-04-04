const equipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const equipment = mongoose.model("equipment", equipmentSchema);

module.exports = equipment;
