import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/App.css';
import '../Css/Home.css';
import videoBG from '../img/videoBG.mp4';
import Sidebar from '../components/Sidebar';

function Home() {
  return (
    <div className="generalContainer">
      <div className="homeContainer">
        <video className="videoBg" src={videoBG} autoPlay loop muted />
        <div className="overlay">
          <Sidebar />
          <h1 className="title">
            <span className="welcome">Welcome to</span> CINECHILL
          </h1>
          <h3 className="underTitle">
            If you're tired of spending more time choosing which movies to watch
            rather than watching them, then you've come to the right place!
          </h3>
          <div className="blockButton">
            <Link to="/moviepicker" className="actionBtn">
              ACTION!
            </Link>
          </div>

          <div className="homeContainerTwo">
            <h1 className="titleTWo">HOW DOES IT WORK?</h1>
            <div className="workContainer">
              <div className="descriptionContainer">
                <img
                  src="../img/icons8-bobine-de-film-64.png"
                  className="icons"
                  alt="icons"
                  width="50px"
                />
                <h3 className="underTitle-2">
                  Choose the film category and its realease year. Our website
                  will take care of offering you a personalized selection of
                  films that will both suit you and your friends.
                </h3>
              </div>
              <div className="descriptionContainer">
                <img
                  src="../img/icons8-favoris-50(1).png"
                  className="icons"
                  alt="icons"
                />
                <h3 className="underTitle-2">
                  Our team is going to offer you a list of the best movies since
                  the 80s. You can also suggest us your favorite quotes and
                  gifs!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
