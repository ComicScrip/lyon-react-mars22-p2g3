import { useState } from 'react';
import '../Css/Suggest.css';

function Quote() {
  const [form, setForm] = useState({ name: '', quote: '' });
  // const [quote, setQuote] = useState(false);

  const contentQuote = (e) => {
    e.preventDefault();
    console.log(form.name, form.quote);
  };
  const updateDisplayQuote = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1 className="page-title">SUGGEST A QUOTE</h1>
      <p className="quote-introduction">
        You can share a cult quote from a movie
      </p>
      <div className="content_desktop">
        <div className="form_global">
          <form className="form_quote">
            <label htmlFor="name" className="label_form">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input_form_name"
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
              className="message_form"
              placeholder="Enter your favorite quote"
              value={form.quote}
              onChange={updateDisplayQuote}
              required
            />
            <input
              type="submit"
              value="Submit"
              className="submit_form"
              onClick={contentQuote}
            />
          </form>
        </div>
        <div>
          <h2 className="quote-title">Quote suggested</h2>
          <div className="quote-content">
            <div className="quote-name" />
            <div className="quote" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
