import cx from 'classnames';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const variantMap = {
  h1: 'h1',
  h3: 'h3',
  body: 'p',
};

const Typography = ({ className, children, textAlign, variant }) => {
  const Component = Object.keys(variantMap).includes(variant)
    ? variantMap[variant]
    : variantMap.body;

  return (
    <Component
      className={cx(
        'component-Typography-root',
        {
          [`text-align--${textAlign}`]: textAlign,
        },
        className,
      )}>
      {children}
      <style jsx>{`
        h1,
        h3 {
          letter-spacing: -0.01em;
        }

        h1 {
          font-size: ${theme.pxToRem(85)};
          line-height: ${theme.pxToRem(102)};
        }

        h1:not(:last-child) {
          margin-bottom: ${theme.pxToEm(60, 85)};
        }

        h3 {
          font-size: ${theme.pxToRem(70)};
          line-height: ${theme.pxToRem(84)};
        }

        h3:not(:last-child) {
          margin-bottom: 1em;
        }

        p {
          font-size: ${theme.pxToRem(41)};
          line-height: ${theme.pxToRem(49)};
          letter-spacing: 0.01em;
        }

        p:not(:last-child) {
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
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  variant: PropTypes.oneOf(Object.keys(variantMap)),
};

Typography.defaultProps = {
  className: undefined,
  children: undefined,
  textAlign: 'right',
  variant: 'body',
};

export default Typography;
