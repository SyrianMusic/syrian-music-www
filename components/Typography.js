import cx from 'classnames';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const variantMap = {
  h1: 'h1',
  h3: 'h3',
  body: 'p',
};

const Typography = ({ className, children, as, textAlign, size, variant }) => {
  let Component = variantMap.body;

  if (as) {
    Component = as;
  } else if (Object.keys(variantMap).includes(variant)) {
    Component = variantMap[variant];
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
        .size--md {
          font-size: ${theme.pxToRem(17.5)};
          line-height: ${theme.pxToRem(21)};
        }

        .size--md:not(:last-child) {
          margin-bottom: 1em;
        }

        .size--lg {
          font-size: ${theme.pxToRem(22.5)};
          line-height: ${theme.pxToRem(27)};
        }

        .size--lg:not(:last-child) {
          margin-bottom: ${theme.pxToEm(17.5, 22.5)};
        }

        .variant--h1,
        .variant--h3 {
          letter-spacing: -0.01em;
        }

        .variant--h1 {
          font-size: ${theme.pxToRem(42.5)};
          line-height: ${theme.pxToRem(51)};
        }

        .variant--h1:not(:last-child) {
          margin-bottom: ${theme.pxToEm(30, 42.5)};
        }

        .variant--h3 {
          font-size: ${theme.pxToRem(35)};
          line-height: ${theme.pxToRem(42)};
        }

        .variant--h3:not(:last-child) {
          margin-bottom: 1em;
        }

        .variant--body {
          letter-spacing: 0.01em;
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
  variant: PropTypes.oneOf(Object.keys(variantMap)),
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
