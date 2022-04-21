import '../Css/Details.css';
import React, { useEffect, useState } from 'react';
import SocialMedia from '../components/SocialMedia';
import DisplayMovie from '../components/DisplayMovie';
import axios from 'axios';

export default function Details() {
  const [movie, setMovie] = useState('');

  useEffect(() => {
    axios
      .get('https://imdb-api.com/en/API/Title/k_ns4o5sjc/tt1375666')
      .then((answer) => answer.data)
      .then((data) => {
        setMovie(data);
      });
  }, []);

  return (
    <div className="main">
      <SocialMedia />
      <DisplayMovie movie={movie} />
    </div>
  );
}
