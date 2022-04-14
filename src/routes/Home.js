import React from 'react';
import '../Css/App.css';
import '../Css/Home.css';

function HomePage() {
  return (
    <div className="container">
      <div className="homeContainer">
        <h1 className="title">
          <span className="welcome">Welcome to</span> CINECHILL !
        </h1>
        <h3 className="underTitle">
          Are you tired of spending more time looking for which movie or series
          to see than watching the movie itself?. You've come to the right
          place, Cine-Chill is a movie search nd comparison engine that will
          save you a lot of time.
        </h3>
        <div className="blockButton">
          <button type="button" className="btn">
            ACTION !
          </button>
        </div>
      </div>

      <div className="ContainerTwo">
        <h1 className="titleTWo">HOW DOES IT WORKS ?</h1>

        <div className="workContainer">
          <div className="descriptionContainer">
            <h3 className="underTitle">
              Are you tired of spending more time looking for which movie or
              series to see than watching the movie itself?. You've come to the
              right place, Cine-Chill is a movie search and comparison engine
              that will save you a lot of time.
            </h3>
          </div>
          <div className="descriptionContainer">
            <h3 className="underTitle">
              Are you tired of spending more time looking for which movie or
              series to see than watching the movie itself?. You've come to the
              right place, Cine-Chill is a movie search and comparison engine
              that will save you a lot of time.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
