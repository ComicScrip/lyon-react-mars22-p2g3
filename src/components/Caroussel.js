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
      'Passionate about cinema since childhood, i’m a big fan of comedy films',
  },
  {
    name: 'Werner Mona',
    image: ImageWM,
    description:
      'When I was a child, I loved watch movie on cinema with a big box of pop corn',
  },
  {
    name: 'Anna Boval',
    image: ImageAB,
    description:
      "I love watching romantic movies, I've seen over 200 since my childhood",
  },
  {
    name: 'Leo Laborie',
    image: ImageLL,
    description:
      'I watch action movies with a big ice cream. I love Vin Diesel',
  },
  {
    name: 'Thierno Diallo',
    image: ImageTD,
    description: `Passionate about cinema since childhood, i’m a big fan of science
fiction films`,
  },
];

function Caroussel() {
  return (
    <Carousel>
      {teamMembers.map((item) => (
        <Carousel.Item>
          <img className="d-block w-100" src={item.image} alt="test" />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Caroussel;
