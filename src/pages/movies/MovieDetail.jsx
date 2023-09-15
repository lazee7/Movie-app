import { IMG_URL, OPTIONS, API_URL } from '../../utils/data';
import { BsChevronDown, BsFillStarFill } from 'react-icons/bs';
import { IoListOutline, IoTicketSharp } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/Button';

const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const movieDetailUrl = `${API_URL}movie/${id}`;

    try {
      const res = await fetch(movieDetailUrl, {
        headers: OPTIONS,
      });

      const data = await res.json();
      setMovie(data);
    } catch (err) {
      console.log(err);
      toast.error('an error occured fetching movie');
    }
  };

  if (!movie) return null;

  const date = new Date(movie.release_date);
  const releaseDate = date.toUTCString();

  return (
    <>
      <img
        src={`${IMG_URL}${movie?.backdrop_path}`}
        alt={''}
        className='w-full rounded-[1.25rem]'
      />
      <div className='flex gap-2 flex-col md:flex-row justify-between font-medium mb-2 items-start lg:items-center'>
        <div className='flex justify-between mt-3 lg:items-center md:gap-2 text-xs md:text-sm flex-col lg:flex-row'>
          <div className='flex gap-2 items-center'>
            <h2
              className=' capitalize after:contents-[""] relative'
              data-testid='movie-title'
            >
              {movie.title}
            </h2>
            <span className='text-3xl rounded-full w-1 h-1 bg-text '></span>
            <p data-testid='movie-realease-date'>{releaseDate}</p>
            <span className='text-3xl rounded-full w-1 h-1 bg-text '></span>
            <p data-testid='movie-runtime'>{movie.runtime}m</p>
          </div>
          <ul className='flex gap-2 items-center'>
            {movie.genres.map(({ id, name }) => (
              <li
                key={id}
                className='border p-2 rounded-xl border-[#F8E7EB] text-pink md:text-[0.9375rem] text-xs'
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex gap-1 items-center mt-3'>
          <BsFillStarFill className='text-yellow-400' />
          <p className='text-sm'>
            {movie.vote_average} | {movie.vote_count}
          </p>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-5'>
        <div className='col-span-5 md:col-span-3'>
          <p data-testid='movie-overview'>{movie.overview}</p>
          <div className='flex flex-col md:flex-row gap-2 items-center scroll-py-80'>
            <Button className='bg-pink text-white p-3 text-xs lg:text-base xl:text-xl font-medium mb-3 w-fit rounded-ul justify-center'>
              Top rated movie #65
            </Button>
            <div className=''>
              <Button className='w-full rounded-md border border-faint py-1 px-3 text-sm flex items-center gap-2 mb-3 '>
                awards 9 nonimations
                <BsChevronDown className='' />
              </Button>
            </div>
          </div>
        </div>
        <div className='col-span-5 md:col-span-2 flex flex-col items-center'>
          <Button className='bg-pink text-white p-3 text-base lg:text-xl font-medium mb-3 w-full flex items-center gap-2 rounded-ul justify-center capitalize'>
            <IoTicketSharp />
            see showtimes
          </Button>
          <Button className='border border-pink bg-faint text-text p-3 text-base lg:text-xl font-medium w-full flex items-center gap-2 rounded-ul justify-center'>
            <IoListOutline className='text-xl' />
            More watch options
          </Button>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
