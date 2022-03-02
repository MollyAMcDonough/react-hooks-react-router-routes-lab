import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors);
  const directorsJsx = directors.map((director) => {
    const moviesJsx = director.movies.map((movie)=><li key={movie}>{movie}</li>);
    return (
      <div key={director.name}>{director.name}
        <ul>{moviesJsx}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsJsx}
    </div>
  );
}

export default Directors;
