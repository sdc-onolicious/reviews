const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  _id: Number,
  // restaurant: Number,
  // diner: Number,
  // text: String,
  // date: Date,
  // overall: Number,
  // food: Number,
  // service: Number,
  // ambience: Number,
  // wouldrecommend: Boolean,
  // tags: String,
  // diner: {
  //   firstname: String,
  //   lastname: String,
  //   city: String,
  //   avatarcolor: String,
  //   isvip: Boolean,
  //   totalreviews: Number
  // }
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
