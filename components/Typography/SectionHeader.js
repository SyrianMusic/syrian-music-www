import PropTypes from 'prop-types';
import { Typography } from './Typography';
import theme from '../../styles/theme';

const getVariantStyles = (variant) => {
  switch (variant) {
    case Typography.variants.body:
      return {
        ':after': {
          marginBottom: '0.45em',
        },
      };
    case Typography.variants.h3:
    default:
      return {
        ':after': {
          marginBottom: '0.45em',
          // [theme.mq.mobileToDesktop]: {
          //   marginBottom: '0.5em',
          // },
        },
      };
  }
};

const SectionHeader = ({ className, children, as, size, variant }) => {
  return (
    <Typography
      css={[
        getVariantStyles(variant),
        {
          clear: 'both',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&:after': {
            backgroundColor: theme.color.accentTan,
            content: '""',
            flex: 1,
            height: '1px',
            marginLeft: theme.spacing.get(16),
            alignSelf: 'flex-end',
          },
        },
      ]}
      className={className}
      size={size}
      variant={variant}
      as={as}>
      {children}
    </Typography>
  );
};

SectionHeader.sizes = Typography.sizes;
SectionHeader.variants = Typography.variants;

SectionHeader.propTypes = {
  as: Typography.propTypes.as,
  className: PropTypes.string,
  children: PropTypes.node,
  size: Typography.propTypes.size,
  variant: Typography.propTypes.variant,
};

SectionHeader.defaultProps = {
  as: Typography.defaultProps.as,
  className: undefined,
  children: undefined,
  size: Typography.defaultProps.size,
  variant: Typography.variants.h3,
};

export default SectionHeader;
