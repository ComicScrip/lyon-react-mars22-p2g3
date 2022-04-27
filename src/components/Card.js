import React from 'react';

function Card({ movie }) {
  return (
    movie && (
      <div className="list-movie">
        {movie.slice(0, 10).map((movies) => (
          <div key={movies.id} className="movie">
            <img className="poster" alt={movies.title} src={movies.image} />
            <h3 className="title-movie">{movies.title}</h3>
            <p className="year">{movies.year}</p>
            <p className="rating">{movies.imDbRating}</p>
          </div>
        ))}
      </div>
    )
  );
}

export default Card;
