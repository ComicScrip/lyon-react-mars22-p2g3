import axios from 'axios';
import React, { useEffect } from 'react';

function ResultAPI() {
  useEffect(() => {
    axios
      .get('https://imdb-api.com/en/API/Top250Movies/k_ns4o5sjc')
      .then((res) => console.log(res.data.results));
  }, []);
  return <div className="result" />;
}

export default ResultAPI;
