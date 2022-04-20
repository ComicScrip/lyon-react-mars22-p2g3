import '../Css/App.css';
import '../Css/Details.css';
import SocialMedia from '../components/SocialMedia';

/* import { BrowserRouter as NavLink } from 'react-router-dom';
<NavLink to="https://fr-fr.facebook.com/"></NavLink> */

export default function Details() {
  return (
    <div className="main">
      <SocialMedia />
      <div className="posterContainer">
        <img
          className="posterCover"
          src="https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.6837_AL_.jpg"
          alt="movie"
        />
      </div>
      <div className="infoContainer">
        <div className="infoContainer1">
          <img
            className="poster"
            src="https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.6837_AL_.jpg"
            alt="movie"
          />
        </div>
        <div className="mainContent">
          <h1 className="title"> Title </h1>
          <div className="detailsInfo">
            <p>
              <span className="year"> releaseDate </span>, runtimeStr, genres
            </p>
            <p> Director </p>
            <p>
              <span className="rating"> &#x2605; </span>
              Rating
            </p>
          </div>

          <h2 className="Plot">Synopsis</h2>
          <p className="moviePlot">
            Dom Cobb is a skilled thief, the absolute best in the dangerous art
            of extraction, stealing valuable secrets from deep within the
            subconscious during the dream state, when the mind is at its most
            vulnerable. Cobb's rare ability has made him a coveted player in
            this treacherous new world of corporate espionage, but it has also
            made him an international fugitive and cost him everything he has
            ever loved. Now Cobb is being offered a chance at redemption. One
            last job could give him his life back but only if he can accomplish
            the impossible, inception. Instead of the perfect heist, Cobb and
            his team of specialists have to pull off the reverse: their task is
            not to steal an idea, but to plant one. If they succeed, it could be
            the perfect crime. But no amount of careful planning or expertise
            can prepare the team for the dangerous enemy that seems to predict
            their every move. An enemy that only Cobb could have seen coming.
          </p>
          <div className="Cast">Cast</div>
          <div className="castContainer">
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
                src="./pictures/actor2.jpeg"
                className="castPictures"
                alt=""
              />
              <p>Sam Worthington</p>
            </div>
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
  );
}
