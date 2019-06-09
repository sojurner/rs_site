import React from 'react';
import './Contact.css';
import { InitialLoadConsumer } from '../context';
import Icons from '../../assets/images/svgImport.js';

const icons = [
  { url: 'email', img: Icons.Email },
  { url: 'linkedin', img: Icons.Linkedin },
  { url: 'phone', img: Icons.Phone },
  { url: 'https://github.com/Mycobee', img: Icons.Github }
];

const Contact = () => {
  const rootPath =
    'https://res.cloudinary.com/paulkim/image/upload/v1552415216/images/icons';
  const renderedIcons = icons.map((icon, index) => (
    <div
      onClick={() => window.open(icon.url, '_blank').focus()}
      key={`icon-${index}`}
    >
      <img
        className={`contact-item contact-item-${index}`}
        height="50"
        width="40"
        alt="contact link icons"
        src={icon.img}
      />
    </div>
  ));
  return (
    <InitialLoadConsumer>
      {context =>
        context ? (
          <aside className="contact-icons">{renderedIcons}</aside>
        ) : (
          <></>
        )
      }
    </InitialLoadConsumer>
  );
};

export default Contact;
