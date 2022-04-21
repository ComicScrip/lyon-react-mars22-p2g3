import React, { useState } from 'react';
import '../Css/App.css';
import '../Css/Questionnaire.css';
import '../Css/Navbar.css';
import '../Css/index.css';
// import Question1 from '../components/Question1';
import Question2 from '../components/Question2';

function Questionnaire() {
  const [isActif, setIsActif] = useState(false);
  const handleClick = () => {
    setIsActif(!isActif);
  };
  return (
    <div>
      <h1 className="question_title">QUESTIONS</h1>
      <div className="cercle">
        <span className="compteur"> 2/3</span>
      </div>
      <h2 className="question">What kind of movies do you like ?</h2>
      <section className="section_card">
        <div className="cardsx">
          <button type="submit" className="cardy" onClick={handleClick}>
            Comedy
          </button>
          <button type="submit" className="cardy" onClick={handleClick}>
            Action
          </button>
          <button type="submit" className="cardy" onClick={handleClick}>
            Sci-Fi
          </button>
          <button type="submit" className="cardy" onClick={handleClick}>
            Drama
          </button>
          <button type="submit" className="cardy" onClick={handleClick}>
            Thriller
          </button>
          <button type="submit" className="cardy" onClick={handleClick}>
            Horror
          </button>
        </div>
      </section>
      <div>{isActif ? <Question2 /> : ''}</div>
    </div>
  );
}
export default Questionnaire;
