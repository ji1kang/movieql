export let movies = [
    {
      id: 0,
      name: "Avengers",
      score: 4,
    },
    {
      id: 1,
      name: "Minari",
      score: 5,
    }
  ];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
}

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length){
    movies = cleanedMovies;
    return true;
  } else{
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: Number(`${movies.length}`),
    name,
    score
  };
  console.log(newMovie);
  movies.push(newMovie);
  return newMovie;
}