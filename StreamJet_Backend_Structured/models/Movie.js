const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  downloadUrl: String
});

module.exports = mongoose.model("Movie", movieSchema);
