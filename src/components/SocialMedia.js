import React from 'react';
import '../Css/Details.css';
import { Link } from 'react-router-dom';

export default function SocialMedia() {
  return (
    <div>
      <div className="shareOn">
        <div className="shareText">share on</div>
        <Link to="//fr-fr.facebook.com/" target="_blank">
          <img
            src="/pictures/icons8-facebook-30.png"
            alt="share on Facebook"
            className="shareOnFacebook"
          />
        </Link>
        <Link to="//fr-fr.facebook.com/" target="_blank.">
          <img
            src="/pictures/icons8-facebook-messenger-30.png"
            alt="share on Messenger"
            className="shareOnMessenger"
          />
        </Link>
        <Link to="//fr-fr.facebook.com/" target="_blank">
          <img
            src="/pictures/icons8-instagram-30.png"
            alt="share on
          Instagram"
            className="shareOnInstagram"
          />
        </Link>
        <Link to="//fr-fr.facebook.com/" target="_blank">
          <img
            src="/pictures/icons8-whatsapp-30.png"
            alt="share on Messenger"
            className="shareOnWhatsapp"
          />
        </Link>
        <Link to="//fr-fr.facebook.com/" target="_blank">
          <img
            src="/pictures/icons8-twitter-30.png"
            alt="share on Messenger"
            className="shareOnTwitter"
          />
        </Link>
      </div>
    </div>
  );
}
