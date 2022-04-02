import React from 'react';
import Movie from '../Movie';

const MovieList = ({movies}) => {
  return (
    <div>
       {movies.map( (movie) => 
         <Movie 
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          year={movie.year}
          rating={movie.rating}
          director={movie.director}
          genre={movie.genre}
         />
       )}
    </div>
  )
};

export default MovieList;



{/* <li>
<h3> {movie.title} </h3>
<img src={`/assets/${movie.poster}`} alt="poster"/>
<p>Year: {movie.year}</p>
<p>Rating: {movie.rating}</p>
<p>Directed by: {movie.director}</p>
<p>Genre: {movie.genre}</p>
</li> */}