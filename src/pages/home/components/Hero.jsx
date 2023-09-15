import PropTypes from 'prop-types';
import Genre from '../../../components/Genre';
import { BsFillPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Hero = (props) => {
  const {
    title,
    overview,
    popularity,
    vote_average,
    toggleSlide,
    items,
    current = 0,
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

  return (
    <div
      className={`grid md:px-8 md:grid-cols-5 py-7 px-4
      `}
    >
      <div className=' flex  flex-col gap-8 md:col-span-2 text-center md:text-left'>
        <h2 className={`md:text-5xl leading-[3.5rem] font-bold text-3xl`}>
          {title}
        </h2>
        <div className='flex justify-center md:justify-start items-center gap-10 md:gap-16'>
          {viewsData.map((view) => (
            <Genre key={view.id} {...view} />
          ))}
        </div>
        <p className='text-sm leading-[1.125] font-medium'>{overview}</p>
        <Link
          to={'.'}
          className='self-center md:self-start bg-pink rounded-md center p-3 md:px-8 md:py-4 gap-3'
        >
          <BsFillPlayFill
            className={'bg-white text-pink text-2xl rounded-full p-1'}
          />
          <span className='leading-6 uppercase font-bold tracking-wider text-base '>
            watch trailer
          </span>
        </Link>
      </div>

      <ul className='hidden md:col-span-3 md:flex flex-col items-end'>
        {items.map((num) => (
          <li
            key={num}
            onClick={() => {
              toggleSlide(num);
            }}
            className={`p-1 relative before:contents-[""] before:absolute before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-[2px] before:-left-5 w-fit text-xs font-bold ${
              num === current ? 'before:bg-white text-white' : 'text-inactive'
            } hover:cursor-pointer`}
          >
            {num + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  vote_average: PropTypes.number,
  toggleSlide: PropTypes.func,
  items: PropTypes.array,
  current: PropTypes.number,
};

export default Hero;
