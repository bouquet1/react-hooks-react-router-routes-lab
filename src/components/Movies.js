import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map((movie) => {
    return <div key={movie.title}>{movie.title}{movie.time}</div>})
  
  const genreList = movies.map(movie => (<li key={movie.title}>{movie.genres}</li>))

  return (
  <div>
    <h1>Movies Page</h1>
      {movieList}
    <ul>
      {genreList}
    </ul>
  </div>
    )
}

export default Movies;

