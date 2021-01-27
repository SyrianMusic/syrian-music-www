import cx from 'classnames';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const variantMap = {
  h1: 'h1',
  h3: 'h3',
  body: 'p',
};

const Typography = ({ className, children, as, textAlign, variant }) => {
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
        `variant-${variant}`,
        {
          [`text-align--${textAlign}`]: textAlign,
        },
        className,
      )}>
      {children}
      <style jsx>{`
        .variant-h1,
        .variant-h3 {
          letter-spacing: -0.01em;
        }

        .variant-h1 {
          font-size: ${theme.pxToRem(85)};
          line-height: ${theme.pxToRem(102)};
        }

        .variant-h1:not(:last-child) {
          margin-bottom: ${theme.pxToEm(60, 85)};
        }

        .variant-h3 {
          font-size: ${theme.pxToRem(70)};
          line-height: ${theme.pxToRem(84)};
        }

        .variant-h3:not(:last-child) {
          margin-bottom: 1em;
        }

        .variant-body {
          font-size: ${theme.pxToRem(41)};
          line-height: ${theme.pxToRem(49)};
          letter-spacing: 0.01em;
        }

        .variant-body:not(:last-child) {
          margin-bottom: ${theme.pxToEm(35, 41)};
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
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  variant: PropTypes.oneOf(Object.keys(variantMap)),
};

Typography.defaultProps = {
  className: undefined,
  children: undefined,
  as: undefined,
  textAlign: 'right',
  variant: 'body',
};

export default Typography;
