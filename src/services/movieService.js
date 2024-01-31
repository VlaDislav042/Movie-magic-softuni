const Movie = require('../models/Movie');


exports.getAll = () => {
    const movies =  Movie.find();
    return movies;
};

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

exports.create = (movieData) => {
    return Movie.create(movieData);
    
};

exports.attach = async (movieId, castId) => {
    // return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    const movie = await this.getOne(movieId);

    // This is optional and we don't need it in this case
    // const cast = await Cast.findById(castId);
    // cast.movies.push(movie);
    // await cast.save();

    // TODO: validate castId if exists
    // TODO: validate if cast is already added
    movie.casts.push(cast);

    await movie.save();

    return movie;
}