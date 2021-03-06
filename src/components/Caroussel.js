import React from 'react';
import '../Css/Carousel.css';
import { Carousel } from 'react-bootstrap';
import ImageFB from '../img/FB-photo.png';
import ImageWM from '../img/WM-photo.jpg';
import ImageAB from '../img/AB-photo.jpg';
import ImageLL from '../img/LB-photo.jpg';
import ImageTD from '../img/T-photo.jpg';

const teamMembers = [
  {
    name: 'Félix Berger',
    image: ImageFB,
    description:
      'Passionate about cinema since childhood, I have always been and still am a big fan of french movies',
  },
  {
    name: 'Werner Mona',
    image: ImageWM,
    description: 'I hate horror movies because they scare me so much',
  },
  {
    name: 'Anna Boval',
    image: ImageAB,
    description:
      'Passionate about cinema since I’m 10, I enjoy watching Sci-Fi, thriller and detective films',
  },
  {
    name: 'Leo Laborie',
    image: ImageLL,
    description:
      'I love eating ice cream while watching a movie. It makes me very happy',
  },
  {
    name: 'Thierno Diallo',
    image: ImageTD,
    description:
      'I love science fiction movies because they make me think a lot',
  },
];

function Caroussel() {
  return (
    <Carousel>
      {teamMembers.map((item) => (
        <Carousel.Item>
          <img className="d-block w-100" src={item.image} alt="test" />
          <Carousel.Caption>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Caroussel;
