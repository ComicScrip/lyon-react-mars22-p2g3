import '../Css/Details.css';
import React, { useEffect, useState } from 'react';
import SocialMedia from '../components/SocialMedia';
import DisplayMovie from '../components/DisplayMovie';
import '../Css/App.css';
import '../Css/Navbar.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Details() {
  const [movie, setMovie] = useState('');
  const [trailer, setTrailer] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_IMDB_TITLE}/${process.env.REACT_APP_KEY_API_IMDB}/${id}`
      ) // tt1375666 k_46zywf07
      .then((answer) => answer.data)
      .then((data) => {
        setMovie(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_IMDB_TRAILER}/${process.env.REACT_APP_KEY_API_IMDB}/${id}`
      ) // k_ns4o5sjc
      .then((res) => res.data)
      .then((data) => {
        setTrailer(data);
      });
  }, []);

  return (
    <div className="main">
      <SocialMedia url={window.location.href} />
      <DisplayMovie movie={movie} trailer={trailer} />
    </div>
  );
}
