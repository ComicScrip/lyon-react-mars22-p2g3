import React from 'react';
import '../Css/App.css';
import '../Css/About.css';
import Caroussel from '../components/Caroussel';

function AboutPage() {
  return (
    <div>
      <h1 className="title">ABOUT US</h1>
      <p className="introduction">
        Discover the Cinéchill team and meet cinema enthusiasts from multiple
        universes.
      </p>
      <Caroussel />
    </div>
  );
}

export default AboutPage;
