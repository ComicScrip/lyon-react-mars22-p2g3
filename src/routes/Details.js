import '../Css/App.css';
import '../Css/Details.css';

export default function Details() {
  return (
    <div className="main">
      <img
        className="poster"
        src="https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.6837_AL_.jpg"
        alt="movie"
      />
      <h1 className="title"> title</h1>
      <div className="detailsInfo">
        <p> releaseDate, runtimeStr, genres </p>
        <p> Director </p>
        <p> Rating </p>
      </div>
      <h2 className="">Synopsis</h2>
      <div className="Plot">
        <p>Plot</p>
      </div>
      <div className="Cast">
        <p>Cast</p>
        <img className="cast" alt="cast" />
      </div>
      <iframe
        width="90%"
        src="https://www.youtube.com/embed/-FZ-pPFAjYY"
        title="YouTube video player"
        frameBorder="10"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; full-screen"
        allowFullScreen
      />{' '}
    </div>
  );
}
