import PropTypes from 'prop-types';
import { typography } from '../../styles/mixins';
import theme from '../../styles/theme';

const getSizeStyles = (size) => {
  switch (size) {
    case 'sm':
      return [{ [theme.mq.mobileToDesktop]: [{}, typography.sm.desktop] }, typography.sm.mobile];
    case 'md':
      return [{ [theme.mq.mobileToDesktop]: [{}, typography.md.desktop] }, typography.md.mobile];
    case 'lg':
      return [
        {
          [theme.mq.mobileToDesktop]: [
            { marginBottom: theme.pxToEm(17.5, theme.typography.body.lg.fontSizeDesktop) },
            typography.lg.desktop,
          ],
        },
        typography.lg.mobile,
      ];
    default:
      return [];
  }
};

const headingStyles = { letterSpacing: '-0.01em' };

const getVariantStyles = (variant) => {
  switch (variant) {
    case 'h1':
      return [
        {
          marginBottom: theme.pxToEm(0, theme.typography.h1.fontSizeMobile),
          [theme.mq.mobileToDesktop]: [
            { marginBottom: theme.pxToEm(30, theme.typography.h1.fontSizeDesktop) },
            typography.h1.desktop,
          ],
        },
        typography.h1.mobile,
        headingStyles,
      ];
    case 'h3':
      return [
        {
          marginBottom: theme.pxToEm(22.5, theme.typography.h3.fontSizeMobile),
          [theme.mq.mobileToDesktop]: [
            { marginBottom: theme.pxToEm(22.5, theme.typography.h3.fontSizeDesktop) },
            typography.h3.desktop,
          ],
        },
        typography.h3.mobile,
        headingStyles,
      ];
    case 'body':
      return [
        {
          letterSpacing: '0.01em',
          marginBottom: '1em',
        },
      ];
    default:
  }
};

export const linkStylesMap = {
  default: {
    color: theme.color.interactive,
    textDecorationColor: 'transparent',
    transition: 'text-decoration-color 0.2s ease-in-out',
  },
  hover: {
    textDecorationColor: theme.color.interactive,
  },
  active: {
    filter: 'brightness(0.9)',
  },
};

export const linkStyles = {
  'a, a:visited': linkStylesMap.default,
  'a:hover': linkStylesMap.hover,
  'a:active': linkStylesMap.active,
};

export const Typography = ({ className, css, children, as, size, textAlign, variant }) => {
  let Component = theme.typography.body.tagName;

  if (as) {
    Component = as;
  } else if (
    Object.keys(theme.typography).includes(variant) &&
    theme.typography[variant]?.tagName
  ) {
    Component = theme.typography[variant].tagName;
  }

  const sizeStyles = getSizeStyles(size);
  const variantStyles = getVariantStyles(variant);

  return (
    <Component
      css={[
        sizeStyles,
        variantStyles,
        linkStyles,
        {
          textAlign,
          '&:last-child': {
            marginBottom: 0,
          },
        },
        css,
      ]}
      className={className}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  className: PropTypes.string,
  css: PropTypes.shape({}),
  children: PropTypes.node,
  as: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  variant: PropTypes.oneOf(Object.keys(theme.typography)),
};

Typography.defaultProps = {
  className: undefined,
  css: undefined,
  children: undefined,
  as: undefined,
  size: 'md',
  textAlign: 'left',
  variant: 'body',
};
