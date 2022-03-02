import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies)
  const moviesJsx = movies.map((movie) => {
    const genresJsx = movie.genres.map((genre)=> <li key={genre}>{genre}</li>)
    return (
      <div key={movie.title}>
        <h3>{movie.title}</h3>
        <p>{movie.time}</p>
        <ul>{genresJsx}</ul>
      </div>
    );
  })
  console.log(moviesJsx);
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesJsx}
    </div>
    );
}

export default Movies;
