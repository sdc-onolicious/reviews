// const Attendee = require('../../db/models/Attendee');
const Review = require('../../database/models/ReviewModel');

exports.getReviews = (req, res) => {
  Review.find({"_id": 1})
  .then(data => res.status(200).send(data))
  .catch(err => res.status(400).send(err));
}
// exports.getAll = (req, res) => {
//   Attendee.find({})
//   .then(data => res.status(200).send(data))
//   .catch(err => res.status(400).send(err));
// }

// exports.add = (req, res) => {
//   console.log(req.body);
//   Attendee.create(req.body)
//   .then(() => res.send('success'))
//   .catch((err) => res.send(err))
//   your code here
// }
