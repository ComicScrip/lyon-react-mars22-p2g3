import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import '../Css/Result.css';

export default function Result() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://imdb-api.com/API/AdvancedSearch/k_46zywf07?release_date=1980,1982&genres=action'
      )
      .then((res) => res.data.results)
      .then((data) => {
        setResults(data);
      });
  }, []);
  console.log(results);
  return (
    <>
      <h1 className="title-result">Result</h1>
      <Card movie={results} />
    </>
  );
}
