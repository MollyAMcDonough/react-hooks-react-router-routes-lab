import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsJsx = actors.map((actor) => {
    const moviesJsx = actor.movies.map((movie)=> <li key={movie}>{movie}</li>)
    return (
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <ul>{moviesJsx}</ul>
      </div>
    );
  })
  console.log(actors);
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsJsx}
    </div>
    );
}

export default Actors;
