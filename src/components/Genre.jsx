import PropTypes from 'prop-types';

const Genre = ({ value, alt, src }) => {
  return (
    <p className='center'>
      <img src={src} alt={alt} className='' />
      {value}
    </p>
  );
};

Genre.propTypes = {
  value: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
};

export default Genre;
