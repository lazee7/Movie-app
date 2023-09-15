import { Link } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const pages = [
    { id: 0, url: '', name: 'conditions of use' },
    { id: 1, url: '', name: 'privacy & policy' },
    { id: 2, url: '', name: 'press room' },
  ];
  return (
    <footer className='flex flex-col justify-center gap-5 md:gap-10 items-center pb-10 mt-10'>
      <div className='flex justify-center items-center gap-4 text-sm md:text-2xl'>
        <Link to={''}>
          <FaFacebookSquare />
        </Link>
        <Link to={''}>
          <FaInstagram />
        </Link>
        <Link to={''}>
          <FaTwitter />
        </Link>
        <Link to={''}>
          <FaYoutube />
        </Link>
      </div>

      <nav className=''>
        {pages.map(({ url, name, id }) => (
          <Link to={url} key={id} className=''>
            {name}
          </Link>
        ))}
      </nav>
      <p className='text-sm md:text-base'>{`© 2021 MovieBox by Adriana Eka Prayudha`}</p>
    </footer>
  );
};

export default Footer;
