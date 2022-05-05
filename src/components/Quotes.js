import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Css/Suggest.css';
import ImageTrash from '../img/trash-can.png';

function Quotes() {
  const [form, setForm] = useState({ name: '', quote: '' });
  const [quotes, setQuotes] = useState([]);
  const [deleteContainer, setDeleteContainer] = useState(false);
  const [idToDelete, setIdToDelete] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/quotes`, {
        name: form.name,
        comment: form.quote,
      })
      .then((res) =>
        setQuotes((currentQuotes) => [...currentQuotes, res.data])
      );
    setForm({ name: '', quote: '' });
  };
  const updateDisplayQuote = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteContainer = (id) => {
    setDeleteContainer(true);
    setIdToDelete(id);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/quotes`)
      .then((res) => res.data)
      .then((data) => {
        setQuotes(data);
      });
  }, []);
  console.log(process.env.REACT_APP_API_URL);

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/quotes/${id}`)
      .then(() => setQuotes(quotes.filter((quote) => id !== quote.id)))
      .then(setDeleteContainer(false))
      .catch((err) => console.error(err));
  };

  const movieGif = require('../img/movie.gif');
  return (
    <div>
      <h1 className="page-title">SUGGEST A QUOTE</h1>
      <img className="gif" src={movieGif} alt="wait until the page loads" />
      <p className="quote-introduction">
        Share a cult quote from your favorite movie !
      </p>
      <div className="content_desktop">
        <div className="form_global">
          <h2 className="quote-title">Fill the form to suggest a quote</h2>
          <form className="form_quote" onSubmit={handleSubmit}>
            <label htmlFor="name" className="label_form">
              Name
            </label>
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
              Favorite quote
            </label>
            <textarea
              name="quote"
              className="message-form-quote"
              placeholder="Enter your favorite quote"
              value={form.quote}
              onChange={updateDisplayQuote}
              required
            />
            <input type="submit" value="Submit" className="input-submit-form" />
          </form>
        </div>
        <div className="quote-block">
          <h2 className="quote-title">Quotes</h2>
          {!deleteContainer ? (
            <div className="quotes-container">
              {quotes.map((quote) => (
                <div key={quote.id} className="quote-content">
                  <div className="quote-name">
                    <p>{quote.name}</p>
                  </div>
                  <div className="quote">
                    <p>{quote.comment}</p>
                  </div>
                  <img
                    className="img-trash"
                    src={ImageTrash}
                    alt="Trash"
                    onClick={() => {
                      handleDeleteContainer(quote.id);
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="validation-container">
              <p className="validation-question">
                Are you sure to delete the quote ?{' '}
              </p>
              <div className="all-validation-button">
                <button
                  type="button"
                  onClick={() => setDeleteContainer(!deleteContainer)}
                  className="validation-button"
                >
                  No
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(idToDelete)}
                  className="validation-button"
                >
                  Yes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quotes;
