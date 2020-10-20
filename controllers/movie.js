const Movie = require('../models/movie');
const { Router } = require('express');
const router = Router();

//index route
router.get('/', async (req, res) => {
	res.json(await Movie.find({}));
});

//create route
router.post('/', async (req, res) => {
	res.json(await Movie.create(req.body));
});

//update route
router.put('/:id', async (req, res) => {
	res.json(await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete('/:id', async (req, res) => {
	res.json(await Movie.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
