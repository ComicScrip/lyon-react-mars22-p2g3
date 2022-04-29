import React from 'react';
import DisplayAGiF from '../components/DisplayAGiF';
import '../Css/MovieGif.css';

function MovieGif() {
  return (
    <div>
      <h1 className="title_h1">A Movie = GIF</h1>
      <h2 className="title-h2">SUGGEST A GIF</h2>
      <p className="title_form">You can share a cult GIF from a movie</p>

      <div className="containerAll">
        <div className="movieDiv1"> </div>
        <form>
          <div className="info_form">
            <div className="name_desk">
              <label htmlFor="name" className="label_form">
                Name :
              </label>
              <input
                type="text"
                name="name"
                className="input_form_name"
                required
              />
            </div>
          </div>
          <label htmlFor="message" className="label_form">
            Your cult from your favorite movie :
          </label>
          <textarea name="message" className="message_form" required />
          <input type="submit" value="Submit" className="submit_form" />
        </form>
        <div className="movieDiv2"> </div>
      </div>
      <DisplayAGiF />
    </div>
  );
}

export default MovieGif;
