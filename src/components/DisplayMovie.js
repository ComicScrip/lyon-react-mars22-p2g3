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
              <div className="movieInfo">
                <p>
                  <span className="year">{movie.year}</span>
                  <span>{movie.runtimeStr}</span> {movie.countries}
                </p>
              </div>
              <p>{movie.genres}</p>
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
              {movie.actorList.slice(0, 6).map((actor) => (
                <div key={actor.id} className="actorsInfo">
                  <img
                    className="castPictures"
                    src={actor.image}
                    alt={actor.name}
                  />
                  <p>{actor.name}</p>
                </div>
              ))}
            </div>

            <div className="trailerTitle">Trailer</div>
            <iframe
              className="trailer"
              width="100%"
              src="https://www.youtube.com/embed/CPTIgILtna8" // {src }
              title="YouTube video player"
              frameBorder="10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; full-screen"
              allowFullScreen
            />
          </div>
        </div>
      </>
    )
  );
}

export default DisplayMovie;
