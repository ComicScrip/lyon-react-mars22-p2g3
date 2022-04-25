import '../Css/Details.css';
import React, { useEffect, useState } from 'react';
import SocialMedia from '../components/SocialMedia';
import DisplayMovie from '../components/DisplayMovie';
import axios from 'axios';

export default function Details() {
  const [movie, setMovie] = useState('');
  const [trailer, SetTrailer] = useState('');

  useEffect(() => {
    axios
      .get('https://imdb-api.com/en/API/Title/k_vigm7k1b/tt1375666') // /k_ns4o5sjc/${id} k_46zywf07
      .then((answer) => answer.data)
      .then((data) => {
        setMovie(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://imdb-api.com/API/YouTube/k_vigm7k1b/8hP9D6kZseM') // k_ns4o5sjc
      .then((answer) => answer.data.videos)
      .then((movieInfo) => {
        SetTrailer(movieInfo[1]);
      });
  }, []);

  return (
    <div className="main">
      <SocialMedia />
      <DisplayMovie movie={movie} trailer={trailer} />
    </div>
  );
}
