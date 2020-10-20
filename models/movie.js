const {Schema, model} = require('mongoose');

const movieSchema = new Schema({
    title: String,
    year: Number,
    img: String
},
{timestamps: true}
);

const Movie = model('movie', movieSchema);
module.exports = Movie;