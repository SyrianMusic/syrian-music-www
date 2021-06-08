import PropTypes from 'prop-types';
import theme from '../../styles/theme';

export const PlusIcon = ({ height, width, stroke }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 26.13 25.38">
    <line x1="12.86" x2="12.86" y2="25.38" stroke={stroke} />
    <line x1="26.13" y1="12.89" y2="12.89" />
    <style jsx>{`
      svg line {
        stroke-miterlimit: 10;
        stroke: ${stroke};
      }
    `}</style>
  </svg>
);

PlusIcon.propTypes = {
  height: PropTypes.number,
  stroke: PropTypes.string,
  width: PropTypes.number,
};

PlusIcon.defaultProps = {
  height: 26,
  stroke: theme.color.primary,
  width: 26,
};
