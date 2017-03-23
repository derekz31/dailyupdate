var mongoose = require('mongoose');

var healthSchema = mongoose.Schema({
    name: String,
    weight: Number,
    age: Number
});

var Health = mongoose.model('Health', healthSchema);

module.exports = Health;
