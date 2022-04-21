import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function ResultAPI() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get('https://imdb-api.com/en/API/Top250Movies/k_ns4o5sjc')
      .then((res) => {
        setMoviesData(res.data.items);
      });
  }, []);
  console.log(moviesData);
  return (
    <div className="result">
      {moviesData.map((movie) => (
        <Card
          title={movie.title}
          image={movie.image}
          rating={movie.imDbRating}
        />
      ))}
    </div>
  );
}

export default ResultAPI;
