const Movie = require('../models/movie');
const { Router } = require('express');
const router = Router();

//index route
router.get('/movie', async (req, res) => {
	res.json(await Movie.find({}));
});

//create route
router.post('/movie', async (req, res) => {
	res.json(await Movie.create(req.body));
});

//update route
router.put('/movie/:id', async (req, res) => {
	res.json(await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete('/movie/:id', async (req, res) => {
	res.json(await Movie.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
