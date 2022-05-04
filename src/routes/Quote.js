import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DisplayQuote from '../components/DisplayQuote';
import '../Css/Suggest.css';
import movieGif from '../img/movie.gif';

function Quote() {
  const [form, setForm] = useState({
    name: '',
    quote: '',
  });
  const [quotes, setQuotes] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://lyon-react-mars22-p2g3-api.comicscrip.duckdns.org/quotes',
        {
          name: form.name,
          comment: form.quote,
        }
      )
      .then((res) =>
        setQuotes((currentQuotes) => [...currentQuotes, res.data])
      );
    setForm({
      name: '',
      quote: '',
    });
  };
  const updateDisplayQuote = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios
      .get('https://lyon-react-mars22-p2g3-api.comicscrip.duckdns.org/quotes')
      .then((res) => res.data)
      .then((data) => {
        setQuotes(data);
      });
  }, []);

  return (
    <div>
      <h1 className="page-title"> SUGGEST A QUOTE </h1>{' '}
      <img className="gif" src={movieGif} alt="wait until the page loads" />
      <p className="quote-introduction">
        Share a cult quote from your favorite movie!
      </p>{' '}
      <div className="content_desktop">
        <div className="form_global">
          <h2 className="quote-title"> Fill the form to suggest a quote </h2>{' '}
          <form className="form_quote" onSubmit={handleSubmit}>
            <label htmlFor="name" className="label_form">
              Name{' '}
            </label>{' '}
            <input
              type="text"
              name="name"
              className="input-form-name"
              placeholder="Enter your name"
              value={form.name}
              onChange={updateDisplayQuote}
              required
            />
            <label htmlFor="quote" className="label_form">
              Favorite quote{' '}
            </label>{' '}
            <textarea
              name="quote"
              className="message-form-quote"
              placeholder="Enter your favorite quote"
              value={form.quote}
              onChange={updateDisplayQuote}
              required
            />
            <input type="submit" value="Submit" className="input-submit-form" />
          </form>{' '}
        </div>{' '}
        <DisplayQuote quotes={quotes} />{' '}
      </div>{' '}
    </div>
  );
}

export default Quote;
