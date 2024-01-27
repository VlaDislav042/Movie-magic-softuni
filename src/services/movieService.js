const movies = [{
    title: 'FF9',
    genre: 'Action',
    director: 'Ivan Ivanov',
    date: '2022',
    imageUrl: '/img/the-little-mermaid.jpg',
    rating: '5',
    description: 'fdsfsdfsd'
  }];

exports.create = (movieData) => {
    console.log(movieData);
    movies.push(movieData);
};