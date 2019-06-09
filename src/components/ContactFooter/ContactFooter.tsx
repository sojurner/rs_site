import React from 'react';
import './ContactFooter.css';

const svgIcons = [
  {
    file: require('../../assets/images/github.svg'),
    link: 'https://github.com/Mycobee'
  },
  {
    file: require('../../assets/images/linkedin.svg'),
    link: 'https://github.com/Mycobee'
  },
  {
    file: require('../../assets/images/email.svg'),
    link: 'https://github.com/Mycobee'
  },
  {
    file: require('../../assets/images/phone.svg'),
    link: 'https://github.com/Mycobee'
  }
];

const ContactFooter = () => {
  // const redirect = (null: null, url: string) => {}
  const openLink = url => {
    console.log(url);
    window.open(url, '_blank');
  };

  return (
    <footer className="contact-footer">
      {svgIcons.map((icon, index) => (
        <div
          key={`svg-${index}`}
          onClick={openLink.bind(null, icon.link)}
          className="svg-container"
        >
          <img
            key={`svg-${index}`}
            className="contact-icon"
            src={icon.file}
            alt="icons"
          />
        </div>
      ))}
    </footer>
  );
};
export default ContactFooter;
