
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: { type: String, required: true },
    location: String,
    birthDate: Date,
    nicenessLevel: Number
});

personSchema.pre('save', function(next) {
    next();
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;
