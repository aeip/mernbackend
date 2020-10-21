const Movie = require('../models/movie');
const { Router } = require('express');
const router = Router();
const Genre = require('../models/genre');

//index route
router.get('/', async (req, res) => {
	res.json(await Movie.find({}));
});

//create route
router.post('/', async (req, res) => {
    res.json(await Movie.create(req.body),
             await Genre.findOneAndUpdate({name: req.body.genre}, movies.push(req.body._id)));
});

//update route
router.put('/:id', async (req, res) => {
	res.json(await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete('/:id', async (req, res) => {
    res.json(await Movie.findByIdAndRemove(req.params.id));
});

//genre route
router.get('/:genre', async (req, res) => {
    const genre = await Genre.find({name: req.params.genre});
    res.json(await Movie.find({ _id: genre[0].movies }));
});

// EXPORT ROUTER
module.exports = router;
