import React from "react";
import { movies } from "../data";

function Movies() {

      
  const genreList = movies.map(movie => {
    return (<li key={movie.title}>{movie.genres}</li>
  )})

  const movieList = movies.map((movie, index) => {
    return <div key={index}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <h4>Genres:</h4>
      <ul>{genreList}</ul>
    </div>})


  return (
  <div>
    <h1>Movies Page</h1>
      {movieList}
  </div>
    )
}

export default Movies;

