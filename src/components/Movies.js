import React from "react";
import { movies } from "../data";
import { v4 as uuidv4} from "uuid";

function Movies({movies}) {

  const movieList = movies.map((movie) => (
    <div key={uuidv4}>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={uuidv4}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
  <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>
    )
}

export default Movies;

