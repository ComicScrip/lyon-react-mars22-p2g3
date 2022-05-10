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
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_IMDB_TITLE}/${process.env.REACT_APP_KEY_API_IMDB}/${id}`
      )
      .then((answer) => answer.data)
      .then((data) => {
        setMovie(data);
      })
      .finally(() => setLoader(false));
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_IMDB_TRAILER}/${process.env.REACT_APP_KEY_API_IMDB}/${id}`
      )
      .then((res) => res.data)
      .then((data) => {
        setTrailer(data);
      });
  }, []);

  const loadGif = require('../img/load.gif');

  return (
    <div className="main">
      {loader ? (
        <img
          className="load-gif"
          src={loadGif}
          alt="wait until the page loads"
        />
      ) : (
        <>
          <SocialMedia url={window.location.href} />
          <DisplayMovie movie={movie} trailer={trailer} />
        </>
      )}
    </div>
  );
}
