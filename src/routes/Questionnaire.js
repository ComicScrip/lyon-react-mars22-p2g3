import React from 'react';
import '../Css/App.css';
import '../Css/Questionnaire.css';

function Questionnaire() {
  return (
    <div>
      <h1 className="question_title">QUESTIONS</h1>
      <h2 className="question">What kind of movies do you like ?</h2>
      <section className="question_card">
        <div className="cards">
          <div className="card">
            <h4 className="CategoryName">Comedy</h4>
          </div>
          <div className="card">
            <h4 className="CategoryName">Action</h4>
          </div>
          <div className="card">
            <h4 className="CategoryName">Sci-Fi</h4>
          </div>
          <div className="card">
            <h4 className="CategoryName">Drama</h4>
          </div>
          <div className="card">
            <h4 className="CategoryName">Thriller</h4>
          </div>
          <div className="card">
            <h4 className="CategoryName">Horror</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Questionnaire;
