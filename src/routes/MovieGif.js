import React from 'react';

function MovieGif() {
  return (
    <div>
      <h1 className="title">A Movie = GIF</h1>
      <h2 className="introduction">SUGGEST A CULT MOVIE QUOTE</h2>

      <p className="title_form">Here you can share a cult GIF from a movie</p>
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
    </div>
  );
}

export default MovieGif;
