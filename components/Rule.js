import PropTypes from 'prop-types';
import theme from '../styles/theme';

const colors = {
  default: 'default',
  accent: 'accent',
};

const getColor = (value) => {
  switch (value) {
    case 'accent':
      return theme.color.accentTan;
    case 'default':
    default:
      return theme.color.black;
  }
};

const Rule = ({ className, color }) => {
  return (
    <hr
      className={className}
      css={{
        borderStyle: 'none',
        borderTop: `${theme.pxToRem(1)} solid ${getColor(color)}`,
        margin: theme.spacing.get(24),
        [theme.mq.mobileToDesktop]: {
          margin: `${theme.spacing.get(24)} ${theme.spacing.get(48)}`,
        },
      }}
    />
  );
};

Rule.colors = colors;

Rule.propTypes = { className: PropTypes.string, color: PropTypes.oneOf(Object.values(colors)) };
Rule.defaultProps = { className: undefined, color: colors.default };

export default Rule;
