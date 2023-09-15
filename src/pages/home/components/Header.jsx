import PropTypes from 'prop-types';
import { IMG_URL } from '../../../utils/data';
import NavBar from './NavBar';
import Hero from './Hero';
import { useMemo, useState } from 'react';

const Header = ({ moviesList }) => {
  const [current, setCurrent] = useState(0);
  const movie = useMemo(() => {
    return moviesList[current];
  }, [current, moviesList]);

  if (moviesList.length === 0) return null;

  const items = moviesList.map((_, index) => index);
  const toggleSlide = (id) => {
    setCurrent(id);
  };

  return (
    <header
      key={movie.id}
      className={`relative md:h-screen text-white flex justify-start md:gap-40 flex-col gap-14}`}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%),url(${IMG_URL}${movie.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <NavBar />
      <Hero
        {...movie}
        toggleSlide={toggleSlide}
        items={items}
        current={current}
      />
    </header>
  );
};

Header.propTypes = {
  moviesList: PropTypes.array,
};

export default Header;
