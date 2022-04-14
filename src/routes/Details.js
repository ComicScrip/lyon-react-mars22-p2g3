import '../Css/App.css';
import '../Css/Details.css';

export default function Details() {
  return (
    <div className="main">
      <img
        src="../pictures/share-Fb.jpg"
        alt="shareOnSocialMedia"
        className="shareOnSocialMedia"
      />
      <img
        className="poster"
        src="https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.6837_AL_.jpg"
        alt="movie"
      />
      <h1 className="title"> Title </h1>
      <div className="detailsInfo">
        <p> releaseDate, runtimeStr, genres </p>
        <p> Director </p>
        <p>
          <span>&#x2605;</span> Rating
        </p>
      </div>
      <h2 className="Plot">
        Synopsis
        <p>Plot</p>
      </h2>
      <div className="Cast">
        <p>Cast</p>
        <div className="castContainer">
          <img src="./pictures/actor1.jpeg" className="castPictures" alt="" />
          <img src="./pictures/actor2.jpeg" className="castPictures" alt="" />
          <img src="./pictures/actor3.jpeg" className="castPictures" alt="" />
        </div>
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
