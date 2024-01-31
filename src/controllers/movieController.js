const router = require('express').Router();
const movieService = require('../services/movieService');
const castService = require('../services/castService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async(req, res) => {
    const newMovie = req.body;
    try{
        await movieService.create(newMovie);
        res.redirect('/')
    } catch(err){
        console.log(err.message);
        res.redirect('/create');
    }
});

/*  router.get('/movies/:movieId', async(req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    

    res.render('details', {movie});
}); TODO FIX*/

router.get('/movies/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const movie =  movieService.getOne(movieId).lean();
    // const casts = await castService.getByIds(movie.casts).lean();


    res.render('details', { movie });
});
router.get('/movies/:movieId/attach', async(req, res) => {
    const movie = await movieService.getOne(req.params.movieId).lean();
    const casts = await castService.getAll().lean();
    res.render('movie/attach', { ...movie, casts });
})

router.post('/movies/:movieId/attach', async(req, res) => {
    const castId = req.body.cast;
    await movieService.attach(req.params.movieId, castId);
    res.redirect(`/movies/${req.params.movieId}/attach`);
})

module.exports = router;