import PropTypes from 'prop-types';

export const YouTube = ({ height, width }) => (
  <svg
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 45 45">
    <g data-name="invisible box" fill="none">
      <path data-name="Rectangle 64" d="M0 0h45v45H0z" />
      <path data-name="Rectangle 65" d="M0 0h45v45H0z" />
    </g>
    <g data-name="icons Q2">
      <path
        data-name="Path 464"
        d="M42.439 11.88a5.175 5.175 0 00-3.67-3.67c-3.199-.846-16.183-.846-16.183-.846s-12.985 0-16.184.847a5.175 5.175 0 00-3.67 3.67c-.846 3.198-.846 9.973-.846 9.973s0 6.775.847 9.974a5.175 5.175 0 003.67 3.67c3.2.847 16.184.847 16.184.847s12.984 0 16.184-.847a5.175 5.175 0 003.67-3.67c.847-3.2.847-9.974.847-9.974s-.002-6.775-.849-9.974zM18.446 28.064v-12.42l10.726 6.21z"
      />
    </g>
  </svg>
);

YouTube.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

YouTube.defaultProps = {
  className: undefined,
  height: 45,
  width: 45,
};
