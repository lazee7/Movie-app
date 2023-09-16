import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { OPTIONS, POPULAR_MOVIES_ENDPOINT } from '../../utils/data';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import MovieList from '../../components/MovieList';

const Home = () => {
  const [data, setData] = useState([]);
  const fiveMovies = data?.slice(0, 5);
  const tenMovies = data?.slice(0, 10);
  useEffect(() => {
    fetchTopMovies();
  }, []);

  const fetchTopMovies = async () => {
    try {
      const res = await fetch(POPULAR_MOVIES_ENDPOINT, {
        headers: OPTIONS,
      });

      // data
      const d = await res.json();
      setData(d.results);
    } catch (err) {
      console.log(err);
      toast.error('an error occured fetching movies');
    }
  };

  return (
    <>
      <Header moviesList={fiveMovies} />
      <main className='p-7 md:p-14'>
        <div className='center mb-12'>
          <h2 className='text-black  text-2xl md:text-4xl font-bold capitalize'>
            featured movie
          </h2>
          <Link
            to={'movies'}
            className='text-pink font-normal text-sm md:text-lg leading-6 flex items-center gap-2'
          >
            See more <AiOutlineRight />
          </Link>
        </div>
        <MovieList movies={tenMovies} link={'movies/'} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
