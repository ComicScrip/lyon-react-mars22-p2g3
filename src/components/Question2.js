import React from 'react';
import '../Css/App.css';
import '../Css/Questionnaire.css';
import '../Css/Navbar.css';
import '../Css/index.css';

function Question2() {
  return (
    <div>
      <h2 className="question">Which year ?</h2>
      <section className="section_card">
        <div className="cardsx">
          <button type="submit" className="cardy">
            1980 -2000
          </button>
          <button type="submit" className="cardy">
            2000-2015
          </button>
          <button type="submit" className="cardy">
            2015-2022
          </button>
        </div>
      </section>
    </div>
  );
}
export default Question2;
