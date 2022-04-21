/* eslint-disable no-console */
import React, { useRef } from 'react';
import '../Css/App.css';
import '../Css/About.css';
import Caroussel from '../components/Caroussel';
import emailjs from '@emailjs/browser';

function About() {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_d3soh6n',
        'template_pciwueo',
        form.current,
        'gz1qumuVuLt8cao9j'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h1 className="title">ABOUT US</h1>
      <p className="introduction">
        Discover the Cinéchill team and meet cinema enthusiasts from multiple
        universes.
      </p>
      <Caroussel />
      <h2 className="title_form">Contact</h2>
      <form ref={form} className="form" onSubmit={sendEmail}>
        <div className="info_form">
          <div className="name_desk">
            <label htmlFor="name" className="label_form">
              Name
            </label>
            <input type="text" name="name" className="input_form_name" />
          </div>
          <div className="email_desk">
            <label htmlFor="email" className="label_form">
              Email
            </label>
            <input type="email" name="email" className="input_form_email" />
          </div>
        </div>
        <label htmlFor="message" className="label_form">
          Message
        </label>
        <textarea name="message" className="message_form" />
        <input type="submit" value="Submit" className="submit_form" />
      </form>
    </div>
  );
}

export default About;
