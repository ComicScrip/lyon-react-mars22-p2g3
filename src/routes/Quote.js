import '../Css/Suggest.css';

function Quote() {
  return (
    <div>
      <h1 className="page-title">SUGGEST A QUOTE</h1>
      <p className="quote-introduction">
        You can share a cult quote from a movie
      </p>
      <div>
        <form className="form">
          <label htmlFor="name" className="label_form">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="input_form_name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="message" className="label_form">
            Favorite quote
          </label>
          <textarea
            name="message"
            className="message_form"
            placeholder="Enter your favorite quote"
            required
          />
          <input type="submit" value="Submit" className="submit_form" />
        </form>
      </div>
      <div>
        <h2 className="quote-title">Quote suggested</h2>
        <div className="quote-content">
          <div className="quote-name">Name</div>
          <div className="quote">Quote</div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
