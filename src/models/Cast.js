const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        max: 120,
        min: 7,
    },
    born: {
        type: Number,
        required: true,
    },
    nameInMovie: {
        type: String,
        required: true, 
    },
    castImage: {
        type: String,
        required: true,
        match: /^https?/,
    },

});

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;
