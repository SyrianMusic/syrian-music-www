import PropTypes from 'prop-types';
import { Typography } from './Typography';
import theme from '../../styles/theme';

const SectionHeader = ({ className, children, as, variant }) => {
  return (
    <Typography
      css={{
        clear: 'both',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: theme.pxToRem(20),
        lineHeight: theme.pxToRem(35),
        '&:after': {
          backgroundColor: theme.color.accentTan,
          content: '""',
          flex: 1,
          height: theme.pxToRem(1),
          marginTop: theme.pxToRem(3),
          marginLeft: theme.pxToRem(14),
        },
        [theme.mq.mobileToDesktop]: {
          fontSize: theme.pxToRem(22),
          lineHeight: theme.pxToRem(25),
        },
      }}
      className={className}
      variant={variant}
      as={as}>
      {children}
    </Typography>
  );
};

SectionHeader.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
};

SectionHeader.defaultProps = {
  as: undefined,
  className: undefined,
  children: undefined,
  variant: 'h3',
};

export default SectionHeader;
