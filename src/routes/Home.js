import React from 'react';
import '../Css/App.css';
import '../Css/Home.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="generalContainer">
      <div className="homeContainer">
        <h1 className="title">
          <span className="welcome">Welcome to</span> CINECHILL !
        </h1>
        <h3 className="underTitle">
          Are you tired of spending more time looking for which movie or series
          to see than watching the movie itself? You've come to the right place,
          Cine-Chill is a movie search nd comparison engine that will save you a
          lot of time.
        </h3>
        <div className="blockButton">
          <Link to="/moviepicker" className="actionBtn">
            ACTION
          </Link>
        </div>
      </div>

      <div className="homeContainerTwo">
        <h1 className="titleTWo">HOW DOES IT WORKS ?</h1>
        <div className="workContainer">
          <div className="descriptionContainer">
            <img
              src="../img/icons8-bobine-de-film-64.png"
              className="icons"
              alt="icons"
              width="50px"
            />
            <h3 className="underTitle-2">
              Choose the category and the year of the film and our site will
              take care of offering you a personalized selection of movies that
              suits you and your friends.
            </h3>
          </div>
          <div className="descriptionContainer">
            <img
              src="../img/icons8-favoris-50(1).png"
              className="icons"
              alt="icons"
            />
            <h3 className="underTitle-2">
              Our team is going to offer you a list of best movies since the 80s
              that you could mark as favorites in your list. You can also
              suggest us your best films ever !
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
