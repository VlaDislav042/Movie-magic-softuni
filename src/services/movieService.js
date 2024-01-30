const Movie = require('../models/Movie');


exports.getAll = () => {
    const movies =  Movie.find();
    return movies;
};

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

exports.create = (movieData) => {
    return Movie.create(movieData);
    
};

exports.attach = async(movieId, castId) => {
   const movie = await this.getOne(movieId);
   movie.casts.push(castId);
   return movie.save();
}