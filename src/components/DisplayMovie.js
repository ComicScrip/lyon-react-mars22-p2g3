import '../Css/Details.css';

function DisplayMovie({ movie }) {
  return (
    movie && (
      <>
        <div className="posterContainer" key={movie.id}>
          <img className="posterCover" src={movie.image} alt={movie.title} />
        </div>
        <div className="infoContainer">
          <div className="infoContainer1">
            <img className="poster" src={movie.image} alt="movie" />
          </div>
          <div className="mainContent">
            <div className="detailsInfo">
              <h1 className="title"> {movie.title} </h1>
              <p>
                <span className="year"> {movie.year} </span> {movie.runtimeStr}{' '}
                {movie.genres}
              </p>
              <p> {movie.directors} </p>
              <p>
                <span className="rating"> &#x2605; </span>
                {movie.imDbRating}
              </p>
            </div>

            <h2 className="Plot">Synopsis</h2>
            <p className="moviePlot">{movie.plot}</p>
            <div className="Cast">Cast</div>
            <div className="castContainer">
              <div className="actorsInfo">
                <img src="" className="castPictures" alt="" />
                <p>Sam Worthington</p>
              </div>
              <div className="actorsInfo">
                ici API acteurs
                <div key="">
                  <img src="" className="castPictures" alt="" />
                  <p>Sam Worthington</p>
                </div>{' '}
                */
                <div className="actorsInfo">
                  <img
                    src="./pictures/actor3.jpeg"
                    className="castPictures"
                    alt=""
                  />
                  <p>Sam Worthington</p>
                </div>
                <div className="actorsInfo">
                  <img
                    src="./pictures/actor1.jpeg"
                    className="castPictures"
                    alt=""
                  />
                  <p>Sam Worthington</p>
                </div>
                <div className="actorsInfo">
                  <img
                    src="./pictures/actor1.jpeg"
                    className="castPictures"
                    alt=""
                  />
                  <p>Sam Worthington</p>
                </div>
              </div>

              <div className="trailerTitle">Trailer</div>
              <iframe
                className="trailer"
                width="90%"
                src="https://www.youtube.com/embed/-FZ-pPFAjYY"
                title="YouTube video player"
                frameBorder="10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; full-screen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default DisplayMovie;
