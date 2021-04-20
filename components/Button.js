import PropTypes from 'prop-types';

const Button = ({ className, children, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
    <style jsx>{`
      button {
        -webkit-appearance: none;
        background: none;
        border: none;
        font: inherit;
        padding: 0;
        outline: none;
        cursor: pointer;
        transition: opacity 0.2s ease-in-out;
      }

      button:hover,
      button:focus {
        opacity: 0.6;
      }
    `}</style>
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: undefined,
  children: undefined,
  onClick: undefined,
};

export default Button;
