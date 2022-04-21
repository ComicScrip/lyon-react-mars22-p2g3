import React from 'react';

function Card({ title, image, imDbRating }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{imDbRating}</h3>
    </div>
    // <div>
    //   <div className="list-movie">
    //     <div className="movie">
    //       <img src="../img/poster.jpg" className="poster" alt="poster" />
    //       <div className="movie-details">
    //         <h3 className="title-movie">Movie title</h3>
    //         <p className="year">2016</p>
    //         <h3 className="rating">
    //           <img
    //             src="../img/icons8-étoile-16.png"
    //             className="icon"
    //             alt="icon star"
    //           />
    //           9/10
    //         </h3>
    //       </div>
    //     </div>
    //     <div className="movie">
    //       <img src="../img/poster.jpg" className="poster" alt="poster" />
    //       <div className="movie-details">
    //         <h3 className="title-movie">Movie title</h3>
    //         <p className="year">2016</p>
    //         <h3 className="rating">
    //           <img
    //             src="../img/icons8-étoile-16.png"
    //             className="icon"
    //             alt="icon star"
    //           />
    //           9/10
    //         </h3>
    //       </div>
    //     </div>
    //     <div className="movie">
    //       <img src="../img/poster.jpg" className="poster" alt="poster" />
    //       <div className="movie-details">
    //         <h3 className="title-movie">Movie title</h3>
    //         <p className="year">2016</p>
    //         <h3 className="rating">
    //           <img
    //             src="../img/icons8-étoile-16.png"
    //             className="icon"
    //             alt="icon star"
    //           />
    //           9/10
    //         </h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;
