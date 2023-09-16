import { Link } from 'react-router-dom';
import { useState } from 'react';
import { stringGenres } from '../utils/helperFunctions';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { IMG_URL } from '../utils/data';
import Button from './Button';
import Genre from './Genre';

const Card = (props) => {
  const {
    link = '',
    poster_path,
    title,
    release_date,
    popularity,
    vote_average,
    genre_ids,
    id,
  } = props;

  const viewsData = [
    {
      id: 0,
      src: '/imbd.png',
      alt: 'imbd logo',
      value: `${vote_average}/10`,
    },
    {
      id: 1,
      src: '/tomatoes.png',
      alt: '',
      value: `${Math.ceil(popularity)}%`,
    },
  ];
  const [toggleLike, setToggleLike] = useState(false);
  const genres = stringGenres(genre_ids);
  const date = new Date(release_date);
  const releaseDate = date.toUTCString();
  return (
    <div data-testid='movie-card' className='relative'>
      <Button
        className={`absolute z-50 top-0 right-0 ${
          toggleLike ? 'text-pink' : 'text-white'
        } pr-3 pt-3`}
        onClick={() => setToggleLike((prev) => !prev)}
      >
        <FaHeart className='text-5xl' />
      </Button>
      <Link to={`${link}${id}`} className='z-[1]'>
        <div className=''>
          <img
            src={`${IMG_URL}${poster_path}`}
            alt={`poster for the movie ${title}`}
            data-testid={'movie-poster'}
            className='w-full rounded-[1.25rem]'
          />
          <p data-testid='movie-release-date'>{releaseDate}</p>
        </div>
        <div className=''>
          <h2 data-testid='movie-title'>{title}</h2>
          <div className='center'>
            {viewsData.map((view) => (
              <Genre key={view.id} {...view} />
            ))}
          </div>
          <p className='capitalize'>{genres}</p>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  popularity: PropTypes.number,
  vote_average: PropTypes.number,
  genre_ids: PropTypes.array,
  id: PropTypes.number,
  link: PropTypes.string,
};

export default Card;
