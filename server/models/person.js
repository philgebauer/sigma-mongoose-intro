// // Step 0 - Get our dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Step 1 - Create the Schema
var personSchema = new Schema({
    name: {type: String, required: true},
    location: String,
    // birthDate: {type: Date, default: new Date()}
});
    // optional
    // {
    //     collection: 'people'
    // }

personSchema.pre('save', function(next) {
  // this is the mongo object about to be saved.
  console.log("Hey, I'm saving --> ", this);
  next();
});


// Step 2 - Create the model
var Person = mongoose.model('Person', personSchema);

// Step 3 - Export our model so we can use it in other parts of our app
module.exports = Person;

/**
 * Book model for Mongoose
 */

// // Step 0 - Get our dependencies
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var Comment = require('./comment').schema;
//
// // Step 1 - Create the Schema
// var bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: String,
//   publishDate: Date,
//   comments: [Comment]
// });
//
// // Step 2 - Create the model
// var Book = mongoose.model('Book', bookSchema);
//
// // Step 3 - Export our model so we can use it in other parts of our app
// module.exports = Book;
