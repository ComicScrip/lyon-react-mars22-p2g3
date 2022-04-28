import React from 'react';
import { Slide } from 'react-slideshow-image';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import '../Css/Slider.css';
import 'react-slideshow-image/dist/styles.css';

const proprietes = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
};

function Slideshow() {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <div className="each-slide">
          <div>
            <img src={img1} alt="img1" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img2} alt="img2" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img3} alt="img3" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img4} alt="img4" />
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Slideshow;
