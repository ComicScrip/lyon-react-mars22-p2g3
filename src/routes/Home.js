import React from 'react';
import '../Css/App.css';
import '../Css/Home.css';
import Caroussel from '../components/Caroussel';

function HomePage() {
  return (
    <>
      <h1 className="title">
        <span className="welcome">Welcome to</span> CINECHILL !
      </h1>
      <Caroussel />
    </>
  );
}

export default HomePage;
