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

export default function SocialMedia() {
  return (
    <div className="shareOn">
      <div className="shareText" alt="share on social Media">
        share on
      </div>
      <div className="shareLinks">
        <FacebookShareButton
          url={'http://localhost:3000/details'}
          quote={'CinéChill helps you to find the perfect movie !'}
          hashtag="#cinéchill"
          className="shareOnFacebook"
        >
          <FacebookIcon />
        </FacebookShareButton>

        <FacebookMessengerShareButton
          url={'http://localhost:3000/details'}
          quote={'CinéChill helps you to find the perfect movie !'}
          hashtag="#cinéchill"
          className="shareOnMessenger"
        >
          <FacebookMessengerIcon />
        </FacebookMessengerShareButton>

        <WhatsappShareButton
          url={'http://localhost:3000/details'}
          quote={'CinéChill helps you to find the perfect movie !'}
          hashtag="#cinéchill"
          className="shareOnWhatsApp"
        >
          <WhatsappIcon />
        </WhatsappShareButton>
        <TwitterShareButton
          url={'http://localhost:3000/details'}
          quote={'CinéChill helps you to find the perfect movie !'}
          hashtag="#cinéchill"
          className="shareOnTwitter"
        >
          <TwitterIcon />
        </TwitterShareButton>

        <EmailShareButton
          url={'http://localhost:3000/details'}
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
