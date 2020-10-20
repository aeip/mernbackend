const Genre = require('../models/genre');
const Movie = require('../models/movie');

Genre.find({}).remove(() => {
    Movie.find({}).remove(() => {
        let comedy = Genre.create({
            name: 'Comedy'
        }).then(genre => {
            Promise.all([
                Movie.create({
                    title: "Hubie Halloween",
                    year: 2020,
                    img: 'https://m.media-amazon.com/images/M/MV5BMTE0N2EyMzgtMWJhZS00ZWNmLThjZmQtMjcxYTk1NTJiMGVkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UY268_CR16,0,182,268_AL_.jpg'
                }).then(movie => {
                    genre.movies.push(movie)
                })
            ]).then(() => {
                genre.save()
            })
        })
        let scifi = Genre.create({
            name: 'Sci-Fi'
        });
        let horror = Genre.create({
			name: 'Horror',
		});
        let romance = Genre.create({
            name: 'Romance'
        });
        let action = Genre.create({
            name: 'Action'
        });
        let thriller = Genre.create({
            name: 'Thriller'
        });
        let drama = Genre.create({
			name: 'Drama',
        });
        let mystery = Genre.create({
			name: 'Mystery',
        });
        let crime = Genre.create({
			name: 'Crime',
        });
        let animation = Genre.create({
			name: 'Animation',
		});
    })
})