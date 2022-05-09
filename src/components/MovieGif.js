import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/MovieGif.css';
import ImageTrash from '../img/trash-can.png';

function MovieGif() {
  const [form, setForm] = useState({ name: '', gif: '' });
  const [gifs, setGifs] = useState([]);
  const [deleteContainer, setDeleteContainer] = useState(false);
  const [idToDelete, setIdToDelete] = useState('');

  const handleDeleteContainer = (id) => {
    setDeleteContainer(true);
    setIdToDelete(id);
  };

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
      .get(`${process.env.REACT_APP_API_URL}/gifs`)
      .then((res) => res.data)
      .then((data) => {
        setGifs(data);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/gifs/${id}`)
      .then(() => setGifs(gifs.filter((gif) => id !== gif.id)))
      .then(setDeleteContainer(false))
      .catch((err) => err);
  };
  return (
    <>
      <h1 className="page-title"> SUGGEST A GIF</h1>
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
              <input
                type="submit"
                value="Submit"
                className="input-gif-submit"
              />
            </form>
          </div>
          <div className="movieDiv2"> </div>
        </div>
        {!deleteContainer ? (
          <div className="gifContainer">
            {gifs.map((gif) => (
              <div className="gif-container" key={gif.id}>
                <img src={gif.gif} alt={gif.name} className="gifquote" />
                <div className="gif-display">
                  <p className="name_gifer">
                    <span className="names">{gif.name}</span>
                  </p>
                  <img
                    src={ImageTrash}
                    alt="Trash"
                    onClick={() => {
                      handleDeleteContainer(gif.id);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="validation-container-gif">
            <p className="validation-question-gif">
              Are you sure to delete the gif ?{' '}
            </p>
            <div className="all-validation-button-gif">
              <button
                type="button"
                onClick={() => setDeleteContainer(!deleteContainer)}
                className="validation-button-gif"
              >
                No
              </button>
              <button
                type="button"
                onClick={() => handleDelete(idToDelete)}
                className="validation-button-gif"
              >
                Yes
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
export default MovieGif;
