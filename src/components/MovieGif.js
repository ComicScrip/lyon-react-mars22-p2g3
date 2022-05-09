import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/MovieGif.css';

function MovieGif() {
  const [form, setForm] = useState({ name: '', gif: '' });
  const [gifs, setGifs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://lyon-react-mars22-p2g3-api.comicscrip.duckdns.org/gifs', {
        name: form.name,
        gif: form.gif,
      })
      .then((res) => setGifs((currentGifs) => [...currentGifs, res.data]));
    setForm({ name: '', gif: '' });
  };
  const updateDisplayGifs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    axios
      .get('https://lyon-react-mars22-p2g3-api.comicscrip.duckdns.org/gifs')
      .then((res) => res.data)
      .then((data) => {
        setGifs(data);
      });
  }, []);
  return (
    <>
      <h1 className="page-title-gif"> SUGGEST A GIF</h1>
      <section className="alseny">
        <div className="global">
          <div className="movieDiv1"> </div>
          <div className="bloc_formes">
            <h3 className="quote_intro">
              We can share your favorite GIFS from a movie
            </h3>
            {/* <p className="paragraphe">We can share a famous GIFS from a movie</p> */}
            <form className="form_gif" onSubmit={handleSubmit}>
              <label htmlFor="name" className="label_form">
                {' '}
              </label>
              <input
                type="text"
                name="name"
                className="input-name"
                value={form.name}
                onChange={updateDisplayGifs}
                placeholder="Enter your name"
                required
              />
              <label htmlFor="gif" className="label_form">
                {' '}
              </label>
              <textarea
                name="gif"
                className="message-form-gif"
                placeholder="Enter your favorite gif movie"
                value={form.gif}
                onChange={updateDisplayGifs}
                required
              />
              <input type="submit" value="Submit" className="input-submit" />
            </form>
          </div>
          <div className="movieDiv2"> </div>
        </div>
        <div className="gifContainer">
          {gifs.map((gif) => (
            <div key={gif.id}>
              <img src={gif.gif} alt={gif.name} className="gifquote" />
              <p className="name_gifer">
                <span className="names">{gif.name}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default MovieGif;
