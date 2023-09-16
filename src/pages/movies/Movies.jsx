import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList';
import { POPULAR_MOVIES_ENDPOINT, OPTIONS } from '../../utils/data';
import { toast } from 'react-toastify';
import Button from '../../components/Button';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  let [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [page]);

  const fetchMovies = async () => {
    try {
      const url = `${POPULAR_MOVIES_ENDPOINT}&page=${page}`;
      const res = await fetch(url, {
        headers: OPTIONS,
      });

      // data
      const data = await res.json();
      setTotalPages(data.total_pages);
      setMovies(data.results);
    } catch (err) {
      console.log(err);
      toast.error('an error occured fetching movies');
    }
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };
  if (!movies) return null;

  return (
    <>
      <MovieList movies={movies} />
      <div className='grid grid-cols-3 place-content-center'>
        <Button
          className={`capitalize col-span-1 ${
            page > 1 ? 'visible' : 'invisible'
          }`}
          onClick={prevPage}
        >
          prev
        </Button>
        <span className='col-span-1'>{page}</span>
        <Button
          className={`col-span-1 capitalize ${page < totalPages}`}
          onClick={nextPage}
        >
          next
        </Button>
      </div>
    </>
  );
};

export default Movies;
