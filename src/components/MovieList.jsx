import PropTypes from 'prop-types';
import Card from './Card';

const MovieList = ({ movies }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
      {movies?.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};
export default MovieList;
