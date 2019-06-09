import React from 'react';
import './ContactFooter.css';

const svgIcons = [
  {
    name: 'github',
    link: 'https://github.com/Mycobee'
  },
  {
    name: 'linkedin',
    link: 'https://github.com/Mycobee'
  },
  {
    name: 'phone',
    link: 'https://github.com/Mycobee'
  },
  {
    name: 'email',
    link: 'https://github.com/Mycobee'
  }
];

const ContactFooter = () => {
  // const redirect = (null: null, url: string) => {}
  const openLink = (event, url) => {
    window.open(url, '_blank');
    event.stopPropagation();
  };

  return (
    <footer className="contact-footer">
      {svgIcons.map((icon, index) => (
        <div
          key={`svg-${index}`}
          onClick={openLink.bind(event, icon.link)}
          className="svg-container"
        >
          <img
            key={`svg-${index}`}
            className="contact-icon"
            src={`https://res.cloudinary.com/paulkim/image/upload/v1552415216/images/icons/${
              icon.name
            }.svg`}
            alt="icons"
          />
        </div>
      ))}
    </footer>
  );
};
export default ContactFooter;
