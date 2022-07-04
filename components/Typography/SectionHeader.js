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
          height: '1px',
          marginLeft: theme.spacing.get(16),
          marginBottom: theme.pxToRem(15),
          alignSelf: 'flex-end',
          [theme.mq.mobileToDesktop]: {
            marginBottom: theme.pxToRem(9),
          },
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
