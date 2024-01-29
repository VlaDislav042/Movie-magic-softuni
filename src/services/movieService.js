const Movie = require('../models/Movie');



exports.getAll = () => {
    const movies =  Movie.find();
    return movies;
}

exports.getOne = (movieId) => {
    const movie = Movie.findById(movieId);
    return movie;
}

exports.create = (movieData) => {
    return Movie.create(movieData);
    
};