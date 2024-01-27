const movies = [{
    _id: '1',
    title: 'FF9',
    genre: 'Action',
    director: 'Ivan Ivanov',
    date: '2022',
    imageUrl: '/img/the-little-mermaid.jpg',
    rating: '5',
    description: 'fdsfsdfsd'
  }];

exports.getAll = () => {
    return [...movies];
}

exports.getOne = (movieId) => {
    const movie = movies.find(movie => movie._id == movieId);
    return movie;
}

exports.create = (movieData) => {
    movieData._id = movies[movies.length - 1]._id + 1;
    movies.push(movieData);
};