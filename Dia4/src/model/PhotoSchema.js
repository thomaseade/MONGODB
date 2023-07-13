const mongoose = require("mongoose")

const photoSchema = new mongoose.Schema({
    userName: String,
    url: String,
    title: String,
    description: String,
  });
  
  let Photo = mongoose.model('Photo', photoSchema);
  module.exports = Photo;