import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IMG_URL } from '../../utils/data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DisplaySearch = ({ results, isLoading }) => {
  if (isLoading)
    return (
      <AiOutlineLoading3Quarters className='text-black text-9xl self-center animate-spin' />
    );

  return (
    <ul className='overflow-y-scroll hide-scrollbar p-3'>
      {results?.map((result) => {
        const date = new Date(result.release_date);

        return (
          <Link key={result.id} to={`movies/${result.id}`} className=''>
            <li className='flex mb-5 items-center justify-between gap-4'>
              <div className='w-32'>
                <img
                  src={`${IMG_URL}${result.poster_path}`}
                  alt='movie poster'
                  className='w-full object-contain'
                />
              </div>
              <p className='flex flex-col'>
                <span className=''>{result.title}</span>
                <span className=''>{date.toUTCString()}</span>
              </p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

DisplaySearch.propTypes = {
  results: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default DisplaySearch;
