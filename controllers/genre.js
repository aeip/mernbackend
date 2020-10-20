const Genre = require('../models/genre');
const { Router } = require('express');
const router = Router();

//index route
router.get('/', async (req, res) => {
    res.json(await Genre.find({}));
});

module.exports = router;