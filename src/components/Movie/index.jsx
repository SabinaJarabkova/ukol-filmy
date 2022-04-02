import React from 'react';
import './style.css';

const Movie = ({title, poster, year, rating, director, genre}) => {
  return (
    <div className="movie">
      <h3>{title}</h3>
      <img src={`/assets/${poster}`} alt="poster" classname="poster" />
      <div className="text">
        <p>Year: {year}</p>
        <p>Rating: {rating}</p>
        <p>Directed by: {director}</p>
        <p>Genre: {genre}</p>
      </div>
    </div>
  )
};

export default Movie;