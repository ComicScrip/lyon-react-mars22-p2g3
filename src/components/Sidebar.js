import React from 'react';
import '../Css/Sidebar.css';

function Sidebar() {
  return (
    <div className="social-container">
      <ul className="social-list">
        <li>
          <a
            target="_blank"
            href="https://github.com/ComicScrip/lyon-react-mars22-p2g3"
            rel="noreferrer"
          >
            <img src="../img/git.png" className="social-icons" alt="git" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/wildcodeschoolofficial/?hl=fr"
            rel="noreferrer"
          >
            <img src="../img/ig.png" className="social-icons" alt="instagram" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://fr-fr.facebook.com/WildCodeSchool/"
            rel="noreferrer"
          >
            <img src="../img/fb.png" className="social-icons" alt="icons" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=JfVOs4VSpmA"
            rel="noreferrer"
          >
            <img src="../img/yt.png" className="social-icons" alt="youtube" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
