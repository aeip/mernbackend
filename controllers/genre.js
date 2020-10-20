const Genre = require('../models/genre');
const { Router } = require('express');
const router = Router();
const seedData = require('../DB/seed');
const { getMaxListeners } = require('../models/genre');

//seed
router.get('/seed', async (req, res) => {
	await Genre.deleteMany({});
	const genres = await Fruit.insertMany(seedData);
	res.json({ status: 200, data: genres });
});

//index route
router.get('/', async (req, res) => {
    res.json(await Genre.find({}));
});

module.exports = router;