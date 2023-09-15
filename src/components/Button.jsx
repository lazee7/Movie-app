import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, type, ...others } = props;
  return (
    <button type={type} {...others}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default Button;
