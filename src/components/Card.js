import { useNavigate } from 'react-router-dom';
import React from 'react';

function Card({ movie }) {
  const navigate = useNavigate();
  return (
    movie && (
      <div className="list-movie">
        {movie.slice(0, 10).map((movies) => (
          <div key={movies.id} className="movie">
            <img
              className="poster"
              alt={movies.title}
              src={movies.image}
              onClick={() => {
                navigate(`/details/${movies.id}`, {
                  replace: true,
                });
              }}
            />
            <h3 className="title-movie">{movies.title}</h3>
            <p className="year">{movies.description}</p>
            <p className="rating">{movies.imDbRating}</p>
          </div>
        ))}
      </div>
    )
  );
}

export default Card;
