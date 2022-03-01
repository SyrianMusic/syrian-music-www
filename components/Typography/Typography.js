import cx from 'classnames';
import PropTypes from 'prop-types';
import { typography } from '../../styles/mixins';
import theme from '../../styles/theme';

export const Typography = ({ className, children, as, size, textAlign, variant }) => {
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

        .size--sm {
          ${typography.sm.mobile};
        }

        .size--md {
          ${typography.md.mobile};
        }

        .size--lg {
          ${typography.lg.mobile};
        }

        .variant--h1,
        .variant--h3 {
          letter-spacing: -0.01em;
        }

        .variant--h1 {
          ${typography.h1.mobile};
          margin-bottom: ${theme.pxToEm(0, theme.typography.h1.fontSizeMobile)};
        }

        .variant--h3 {
          ${typography.h3.mobile};
          margin-bottom: ${theme.pxToEm(22.5, theme.typography.h3.fontSizeMobile)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .size--sm {
            ${typography.sm.desktop};
          }

          .size--md {
            ${typography.md.desktop};
          }

          .size--lg {
            ${typography.lg.desktop};
            margin-bottom: ${theme.pxToEm(17.5, theme.typography.body.lg.fontSizeDesktop)};
          }

          .variant--h1 {
            ${typography.h1.desktop};
            margin-bottom: ${theme.pxToEm(30, theme.typography.h1.fontSizeDesktop)};
          }

          .variant--h3 {
            ${typography.h3.desktop};
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
          color: ${theme.color.interactive};
          text-decoration-color: transparent;
          transition: text-decoration-color 0.2s ease-in-out;
        }

        .component-Typography-root :global(a:hover) {
          text-decoration-color: ${theme.color.interactive};
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
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  variant: PropTypes.oneOf(Object.keys(theme.typography)),
};

Typography.defaultProps = {
  className: undefined,
  children: undefined,
  as: undefined,
  size: 'md',
  textAlign: 'left',
  variant: 'body',
};
