const {Schema, model} = require('mongoose');

const movieSchema = new Schema({
    title: String,
    year: Number,
    img: String,
    genre: String
},
{timestamps: true}
);

const Movie = model('movie', movieSchema);
module.exports = Movie;