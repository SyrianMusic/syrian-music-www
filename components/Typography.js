import cx from 'classnames';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const Typography = ({ className, children, as, size, textAlign, variant }) => {
  let Component = theme.typography.body.tagName;

  if (as) {
    Component = as;
  } else if (
    Object.keys(theme.typography).includes(variant) &&
    theme.typography[variant]?.tagName
  ) {
    Component = theme.typography[variant].tagName;
  }

  return (
    <Component
      className={cx(
        'component-Typography-root',
        `variant--${variant}`,
        {
          [`text-align--${textAlign}`]: textAlign,
          [`size--${size}`]: size,
        },
        className,
      )}>
      {children}
      <style jsx>{`
        .component-Typography-root:last-child {
          margin-bottom: 0;
        }

        .variant--body {
          letter-spacing: 0.01em;
          margin-bottom: 1em;
        }

        .size--md {
          font-size: ${theme.pxToRem(theme.typography.body.md.fontSizeMobile)};
          line-height: ${theme.pxToRem(15)};
        }

        .size--lg {
          font-size: ${theme.pxToRem(theme.typography.body.lg.fontSizeMobile)};
          line-height: ${theme.pxToRem(21)};
        }

        .variant--h1,
        .variant--h3 {
          letter-spacing: -0.01em;
        }

        .variant--h1 {
          /* No examples of this in design */
          font-size: ${theme.pxToRem(theme.typography.h1.fontSizeMobile)};
          line-height: ${theme.pxToRem(0)};
          margin-bottom: ${theme.pxToEm(0, theme.typography.h1.fontSizeMobile)};
        }

        .variant--h3 {
          font-size: ${theme.pxToRem(theme.typography.h3.fontSizeMobile)};
          line-height: ${theme.pxToRem(30)};
          margin-bottom: ${theme.pxToEm(22.5, theme.typography.h3.fontSizeMobile)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .size--md {
            font-size: ${theme.pxToRem(theme.typography.body.md.fontSizeDesktop)};
            line-height: ${theme.pxToRem(21)};
          }

          .size--lg {
            font-size: ${theme.pxToRem(theme.typography.body.lg.fontSizeDesktop)};
            line-height: ${theme.pxToRem(27)};
            margin-bottom: ${theme.pxToEm(17.5, theme.typography.body.lg.fontSizeDesktop)};
          }

          .variant--h1 {
            font-size: ${theme.pxToRem(theme.typography.h1.fontSizeDesktop)};
            line-height: ${theme.pxToRem(51)};
            margin-bottom: ${theme.pxToEm(30, theme.typography.h1.fontSizeDesktop)};
          }

          .variant--h3 {
            font-size: ${theme.pxToRem(theme.typography.h3.fontSizeDesktop)};
            line-height: ${theme.pxToRem(42)};
            margin-bottom: ${theme.pxToEm(22.5, theme.typography.h3.fontSizeDesktop)};
          }
        }

        .text-align--left {
          text-align: left;
        }

        .text-align--center {
          text-align: center;
        }

        .text-align--right {
          text-align: right;
        }

        .component-Typography-root :global(a:link),
        .component-Typography-root :global(a:visited) {
          color: ${theme.color.salmon};
          text-decoration-color: transparent;
          transition: text-decoration-color 0.2s ease-in-out;
        }

        .component-Typography-root :global(a:hover) {
          text-decoration-color: ${theme.color.salmon};
        }

        .component-Typography-root :global(a:active) {
          filter: brightness(0.9);
        }
      `}</style>
    </Component>
  );
};

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.string,
  size: PropTypes.oneOf(['md', 'lg']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  variant: PropTypes.oneOf(Object.keys(theme.typography)),
};

Typography.defaultProps = {
  className: undefined,
  children: undefined,
  as: undefined,
  size: 'md',
  textAlign: 'right',
  variant: 'body',
};

export default Typography;
