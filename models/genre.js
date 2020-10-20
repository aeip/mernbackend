const { Schema, model } = require('mongoose');

const genreSchema = new Schema(
	{
		name: String,
		movies: [{ref: 'Movie', type: Schema.Types.ObjectId}]
	},
	{ timestamps: true }
);

const Genre = model('genre', genreSchema);
module.exports = Genre;
