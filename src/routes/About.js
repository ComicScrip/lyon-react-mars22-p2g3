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
      <h1>Contact</h1>
      <form className="form">
        <input type="text" name="name" className="input" />
        <input type="email" name="email" className="input" />
        <textarea name="message" className="message" />
        <input type="submit" value="Send" className="submit" />
      </form>
    </div>
  );
}

export default AboutPage;
