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
					name: 'Sci-Fi',
				}).then((genre) => {
					Promise.all([
						Movie.create({
							title: 'Tenet',
							year: 2020,
							img:
								'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg',
						}).then((movie) => {
							genre.movies.push(movie);
						}),
					]).then(() => {
						genre.save();
					});
				});
        let horror = Genre.create({
					name: 'Horror',
				}).then((genre) => {
					Promise.all([
						Movie.create({
							title: 'The Haunting of Bly Manor',
							year: 2020,
							img:
								'https://m.media-amazon.com/images/M/MV5BZGJkMDRiOWUtZTMzZC00YzYzLWI1NDAtODc4ZGFiN2Q2MmJlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg',
						}).then((movie) => {
							genre.movies.push(movie);
						}),
					]).then(() => {
						genre.save();
					});
				});
        let romance = Genre.create({
					name: 'Romance',
				}).then((genre) => {
					Promise.all([
						Movie.create({
							title: 'After We Collided',
							year: 2020,
							img:
								'https://m.media-amazon.com/images/M/MV5BN2UyNGM3MDUtMTIzZi00ZDdkLThlYTktYjk0ZDMzM2JiMjMyXkEyXkFqcGdeQXVyNzE0MjkxMzA@._V1_UX182_CR0,0,182,268_AL_.jpg',
						}).then((movie) => {
							genre.movies.push(movie);
						}),
					]).then(() => {
						genre.save();
					});
				});
        let action = Genre.create({
					name: 'Action',
				}).then((genre) => {
					Promise.all([
						Movie.create({
							title: 'Monster Hunter',
							year: 2020,
							img:
								'https://m.media-amazon.com/images/M/MV5BOGU3NTFmNjYtODc3Ny00MWEzLWI3M2ItZjE3NDgwMTI0MzkzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg',
						}).then((movie) => {
							genre.movies.push(movie);
						}),
					]).then(() => {
						genre.save();
					});
				});
        let thriller = Genre.create({
					name: 'Thriller',
				}).then((genre) => {
					Promise.all([
						Movie.create({
							title: 'The Haunting of Hill House',
							year: 2020,
							img:
								'https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
						}).then((movie) => {
							genre.movies.push(movie);
						}),
					]).then(() => {
						genre.save();
					});
				});
        let drama = Genre.create({
					name: 'Drama',
				}).then((genre) => {
					Promise.all([
						Movie.create({
							title: 'Enola Holmes',
							year: 2020,
							img:
								'https://m.media-amazon.com/images/M/MV5BZjNkNzk0ZjEtM2M1ZC00MmMxLTlmOWEtNWRlZTc1ZTUyNzY4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg',
						}).then((movie) => {
							genre.movies.push(movie);
						}),
					]).then(() => {
						genre.save();
					});
				});
        let mystery = Genre.create({
					name: 'Mystery',
				}).then((genre) => {
					Promise.all([
						Movie.create({
							title: 'The Lie',
							year: 2018,
							img:
								'https://m.media-amazon.com/images/M/MV5BY2I5NzM3Y2QtNGY4NS00Njg5LWI2OGYtZDhlN2UzOWJjMDUxXkEyXkFqcGdeQXVyODE0OTU5Nzg@._V1_UX182_CR0,0,182,268_AL_.jpg',
						}).then((movie) => {
							genre.movies.push(movie);
						}),
					]).then(() => {
						genre.save();
					});
				});
        let crime = Genre.create({
					name: 'Crime',
				}).then((genre) => {
					Promise.all([
						Movie.create({
							title: 'The Devil All the Time',
							year: 2020,
							img:
								'https://m.media-amazon.com/images/M/MV5BZmE1NmVmN2EtMjZmZC00YzAyLWE4MWEtYjY5YmExMjUxODU1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
						}).then((movie) => {
							genre.movies.push(movie);
						}),
					]).then(() => {
						genre.save();
					});
				});
        let animation = Genre.create({
					name: 'Animation',
				}).then((genre) => {
					Promise.all([
						Movie.create({
							title: 'Soul',
							year: 2020,
							img:
								'https://m.media-amazon.com/images/M/MV5BOWY1NWNiN2UtNGQ3Yy00ODNlLTgyMzItMzAxZWUxOWNkMjNjXkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_UY268_CR16,0,182,268_AL_.jpg',
						}).then((movie) => {
							genre.movies.push(movie);
						}),
					]).then(() => {
						genre.save();
					});
				});
    })
})