const router = require('express').Router();

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');
const castController = require('./controllers/castController');
const authController = require('./controllers/authController');

router.use('/auth', authController);
router.use('/cast', castController);
router.use(movieController);
router.use(homeController);


module.exports = router;