import PropTypes from 'prop-types';
import theme from '../../styles/theme';

const colors = {
  primary: 'primary',
  accentTan: 'accentTan',
};

export const CaretIcon = ({ className, color, height, width }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox="0 0 22 41">
    <path
      data-name="Path 446"
      d="M.707.707l20 20-20 20"
      fill="none"
      stroke={theme.color[color]}
      strokeWidth="2"
    />
  </svg>
);

CaretIcon.colors = colors;

CaretIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(colors)),
  height: PropTypes.number,
  width: PropTypes.number,
};

CaretIcon.defaultProps = {
  className: undefined,
  color: 'primary',
  height: 41,
  width: 22,
};
