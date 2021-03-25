import cx from 'classnames';
import PropTypes from 'prop-types';
import { fontSizeMd, fontSizeLg, fontSizeH3 } from '../styles/mixins';
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
          ${fontSizeMd};
          margin-bottom: 1em;
        }

        .size--lg {
          ${fontSizeLg};
          margin-bottom: ${theme.pxToEm(17.5, 22.5)};
        }

        .variant--h1,
        .variant--h3 {
          letter-spacing: -0.01em;
        }

        .variant--h1 {
          font-size: ${theme.pxToRem(42.5)};
          line-height: ${theme.pxToRem(51)};
          margin-bottom: ${theme.pxToEm(30, 42.5)};
        }

        .variant--h3 {
          ${fontSizeH3};
          margin-bottom: 1em;
        }

        .component-Typography-root:last-child {
          margin-bottom: 0;
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
