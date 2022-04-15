import React from 'react';

function Card() {
  return (
    <div>
      <h1 className="title-page">Result</h1>
      <div className="list-movie">
        <div className="movie">
          <img src="../img/poster.jpg" className="poster" alt="poster" />
          <div className="movie-details">
            <h3 className="title">Movie title</h3>
            <p className="year">2016</p>
            <h3 className="rating">
              <img
                src="../img/icons8-étoile-16.png"
                className="icon"
                alt="icon star"
              />
              9/10
            </h3>
          </div>
        </div>
        <div className="movie">
          <img src="../img/poster.jpg" className="poster" alt="poster" />
          <div className="movie-details">
            <h3 className="title">Movie title</h3>
            <p className="year">2016</p>
            <h3 className="rating">
              <img
                src="../img/icons8-étoile-16.png"
                className="icon"
                alt="icon star"
              />
              9/10
            </h3>
          </div>
        </div>
        <div className="movie">
          <img src="../img/poster.jpg" className="poster" alt="poster" />
          <div className="movie-details">
            <h3 className="title">Movie title</h3>
            <p className="year">2016</p>
            <h3 className="rating">
              <img
                src="../img/icons8-étoile-16.png"
                className="icon"
                alt="icon star"
              />
              9/10
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
