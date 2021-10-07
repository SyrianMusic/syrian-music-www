import PropTypes from 'prop-types';

export const Facebook = ({ height, width }) => (
  <svg
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 45 45">
    <g data-name="invisible box" fill="none">
      <path data-name="Rectangle 60" d="M0 0h45v45H0z" />
      <path data-name="Rectangle 61" d="M0 0h45v45H0z" />
    </g>
    <g data-name="icons Q2">
      <path
        data-name="Path 460"
        d="M41.4 5.576V39.26a.282.282 0 01-.094.188 1.788 1.788 0 01-1.694 1.694h-9.88v-14.49h4.61c.282 0 .282 0 .376-.282L35 24.018c.094-.941.188-1.882.376-2.823s0-.282-.188-.282h-5.455v-3.67c0-.282.094-.659.094-.941a1.694 1.694 0 011.506-1.508l1.223-.188h2.823c.188 0 .188 0 .188-.188v-4.8c0-.094 0-.188-.188-.188H31.05a6.775 6.775 0 00-3.1.659 5.645 5.645 0 00-3.293 2.917 6.869 6.869 0 00-.753 3.387c-.094 1.411 0 2.917 0 4.422h-4.8c-.188 0-.188.094-.188.188v5.363c0 .188 0 .188.188.188h4.8v14.49a.282.282 0 00-.094.188H5.552a1.788 1.788 0 01-1.694-1.694c-.094.004-.094-.09-.094-.184V5.576c0-.094 0-.188.094-.188a1.788 1.788 0 011.694-1.694h34.06a1.788 1.788 0 011.694 1.694z"
      />
    </g>
  </svg>
);

Facebook.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

Facebook.defaultProps = {
  className: undefined,
  height: 45,
  width: 45,
};
