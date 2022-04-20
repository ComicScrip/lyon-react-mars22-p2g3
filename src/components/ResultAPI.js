import axios from 'axios';
import React, { useEffect } from 'react';

function ResultAPI() {
  useEffect(() => {
    axios
      .get('https://imdb-api.com/en/API/Top250Movies/k_ns4o5sjc')
      .then((res) => console.log.apply(res));
  }, []);
  return <div />;
}

export default ResultAPI;
