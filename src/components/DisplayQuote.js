function DisplayQuote({ quotes }) {
  return (
    quotes && (
      <div>
        <h2 className="quote-title">Quotes</h2>
        {quotes.map((quote) => (
          <div key={quote.id} className="quote-content">
            <div className="quote-name">
              <p>{quote.name}</p>
            </div>
            <div className="quote">
              <p>{quote.comment}</p>
            </div>
          </div>
        ))}
      </div>
    )
  );
}
export default DisplayQuote;
