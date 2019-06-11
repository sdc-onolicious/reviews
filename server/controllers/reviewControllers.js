// const Attendee = require('../../db/models/Attendee');
const Review = require('../../database/models/ReviewModel');

exports.getReviews = (req, res) => {
  Review.find({"_id": req.params.id})
  .then(data => {
    // console.log(Object.keys(data[0]._doc.reviews));
    // why is this an array? 
    // why can't I use data[0].reviews?
    return data[0]._doc.reviews;
  })
  .then(data => res.status(200).send(data))
  .catch(err => res.status(400).send(err));
}
exports.getSummary = (req, res) => {
  Review.find({"_id": req.params.id})
  .then(data => res.status(200).send(data))
  .catch(err => res.status(400).send(err));
}

// exports.add = (req, res) => {
//   console.log(req.body);
//   Attendee.create(req.body)
//   .then(() => res.send('success'))
//   .catch((err) => res.send(err))
//   your code here
// }
