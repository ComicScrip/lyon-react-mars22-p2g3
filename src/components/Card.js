import React from 'react';

function Card() {
  return (
    <div>
      <h1 className="title-page">Result</h1>
      <div className="list-movie">
        <div className="movie1">
          <img src="../img/poster.jpg" className="poster" alt="poster" />
          <div className="movie-details">
            <div className="box">
              <h3 className="title">Movie title</h3>
              <p className="year">2016</p>
              <h3 className="title">⋆ 9.4</h3>
            </div>
          </div>
        </div>
        <div className="movie2">
          <img src="../img/poster.jpg" className="poster" alt="poster" />
          <div className="movie-details">
            <div className="box">
              <h3 className="title">Movie title</h3>
              <p className="year">2016</p>
              <h3 className="title">⋆ 9.4</h3>
            </div>
          </div>
        </div>
        <div className="movie3">
          <img src="../img/poster.jpg" className="poster" alt="poster" />
          <div className="movie-details">
            <div className="box">
              <h3 className="title">Movie title</h3>
              <p className="year">2016</p>
              <h3 className="title">⋆ 9.4</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
