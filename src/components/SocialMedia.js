import React from 'react';
import '../Css/Details.css';
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  WhatsappIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';

// let url = 'https://lyon-react-mars22-p2g3.vercel.app';
// if (typeof window === 'object') {
//   url = String(window.location);
//   console.log(url);
// }

const url = window.location.href;

export default function SocialMedia() {
  return (
    <div className="shareOn">
      <div className="shareText" alt="share on social Media">
        share on
      </div>
      <div className="shareLinks">
        <FacebookShareButton
          url={url}
          quote={'CinéChill helps you to find the perfect movie !'}
          hashtag="#cinéchill"
          className="shareOnFacebook"
        >
          <FacebookIcon />
        </FacebookShareButton>

        <FacebookMessengerShareButton
          url={url}
          quote={'CinéChill helps you to find the perfect movie !'}
          hashtag="#cinéchill"
          className="shareOnMessenger"
        >
          <FacebookMessengerIcon />
        </FacebookMessengerShareButton>

        <WhatsappShareButton
          url={url}
          quote={'CinéChill helps you to find the perfect movie !'}
          hashtag="#cinéchill"
          className="shareOnWhatsApp"
        >
          <WhatsappIcon />
        </WhatsappShareButton>
        <TwitterShareButton
          url={url}
          quote={'CinéChill helps you to find the perfect movie !'}
          hashtag="#cinéchill"
          className="shareOnTwitter"
        >
          <TwitterIcon />
        </TwitterShareButton>

        <EmailShareButton
          url={url}
          quote={'CinéChill helps you to find the perfect movie !'}
          hashtag="#cinéchill"
          className="shareByEmail"
        >
          <EmailIcon />
        </EmailShareButton>
      </div>
    </div>
  );
}
