import React from 'react';
import './Home.css';
import ContactFooter from '../ContactFooter/ContactFooter';

const homeGallery = [
  {
    className: 'news-item home-item',
    hint: 'Projects',

    style: {
      backgroundImage: `url('http://files.all-free-download.com//downloadfiles/wallpapers/1920_1200/old_farm_wallpaper_landscape_nature_1439.jpg')`
      // backgroundImage: `url('http://getwallpapers.com/wallpaper/full/2/a/5/160602.jpg')`
    }
  },
  {
    className: 'news-item standard-item',
    hint: 'Blog',
    style: {
      backgroundImage: `url('https://fsa.zobj.net/crop.php?r=WNGfi24lzbInqnju_dCcgwKHl4r3UUld0NhDWT9Nb8xzsdJQwhAqGtxurtMKyDDsmK8dpikvxMlM-d1AXRrcGbsIxcqPkkyQ0CEbxVqCYofAeNfa-S70jWKhkY1BiwnX3e68GIb1PwCUxI7-')`
    }
  },
  {
    className: 'news-item standard-item',
    hint: 'Contact',

    style: {
      backgroundImage: `url('https://fsa.zobj.net/crop.php?r=1Gy7_1oEU7EmHl9LJJMYNg2lAP81UDOxoVbyD1zATiqW7SOosNWnJ_dzBojo3A9Uv8NmthrVDqiJCBYfDn3AfAdkCceG0bfVmHkQfaKaljT_tJIlT2FXChNMl9-NYYty77JoPv7HsN9rB3-i')`
    }
  },
  {
    className: 'news-item standard-item',
    hint: 'About',
    style: {
      backgroundImage: `url('https://i.pinimg.com/originals/3d/a2/e1/3da2e1aed80c57e7d38e13e4ca4f596d.jpg')`
    }
  }
];

const Home = ({ history }) => {
  const [hovered, setHovered] = React.useState(NaN);

  const handleHover = (index: number) => {
    setHovered(index);
  };

  const redirect = route => {
    history.push(`/${route}`);
  };

  return (
    <div className="wrapper">
      {homeGallery.map((pic, index) => (
        <div
          key={`gallery-${index}`}
          onMouseEnter={handleHover.bind(null, index)}
          onMouseLeave={handleHover.bind(null, NaN)}
          onClick={redirect.bind(null, pic.hint)}
          {...pic}
        >
          {hovered === index && <h1 className="home-hint">{pic.hint}</h1>}
          {pic.hint === 'Contact' && hovered === index && <ContactFooter />}
        </div>
      ))}
    </div>
  );
};

export default Home;
