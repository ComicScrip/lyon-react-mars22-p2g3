import React, { useState } from 'react';
import '../Css/App.css';
import '../Css/Questionnaire.css';
import '../Css/Navbar.css';
import '../Css/index.css';

function Question1() {
  const [isActif, setIsActif] = useState(true);
  const handleClick = () => {
    setIsActif(isActif);
  };
  const value = () => {
    console.log('test');
  };

  return (
    <div>
      <h2 className="question">What kind of movies do you like ?</h2>
      <section className="section_card">
        <div className="cardsx">
          <button
            type="submit"
            className="cardy"
            value={value}
            onClick={handleClick}
          >
            Comedy
          </button>
          <button type="submit" className="cardy">
            Action
          </button>
          <button type="submit" className="cardy">
            Sci-Fi
          </button>
          <button type="submit" className="cardy">
            Drama
          </button>
          <button type="submit" className="cardy">
            Thriller
          </button>
          <button type="submit" className="cardy">
            Horror
          </button>
        </div>
      </section>
    </div>
  );
}
export default Question1;
