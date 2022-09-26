import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from '../styles/theme';

const colors = {
  none: 'none',
  primary: 'primary',
  secondary: 'secondary',
  white: 'white',
};

const types = ['button', 'submit'];

const variants = {
  none: 'none',
  filled: 'filled',
  outlined: 'outlined',
};

const Button = ({ className, children, color, disabled, onClick, type, variant, ...props }) => (
  <button
    className={cx(
      { [`color--${color}`]: color, [`variant--${variant}`]: variant !== 'none' },
      className,
    )}
    disabled={disabled}
    onClick={onClick}
    type={type}
    {...props}>
    {children}
    <style jsx>{`
      button {
        -webkit-appearance: none;
        background: none;
        border: none;
        font: inherit;
        font-size: ${theme.pxToRem(theme.typography.body.lg.fontSizeMobile)};
        outline: none;
        padding: 0;
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: transparent;
        transition: all 0.2s ease-in-out;
      }

      button,
      button:disabled:active,
      button:disabled:focus,
      button:disabled:hover {
        color: ${theme.color.primary};
        text-decoration-color: transparent;
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      button:enabled:active,
      button:enabled:focus,
      button:enabled:hover {
        color: ${theme.color.interactive};
        text-decoration-color: ${theme.color.interactive};
      }

      .color--primary,
      .color--primary:disabled:active,
      .color--primary:disabled:focus,
      .color--primary:disabled:hover {
        color: ${theme.color.white};
      }

      .variant--filled,
      .variant--outlined {
        border: ${theme.pxToRem(2)} solid ${theme.color.primary};
        padding: ${theme.pxToRem(8)};
        text-decoration: none;
      }

      .variant--filled,
      .variant--filled:disabled:active,
      .variant--filled:disabled:focus,
      .variant--filled:disabled:hover,
      .variant--outlined:enabled:active,
      .variant--outlined:enabled:focus,
      .variant--outlined:enabled:hover {
        color: ${theme.color.white};
      }

      .variant--filled,
      .variant--outlined:enabled:active,
      .variant--outlined:enabled:focus,
      .variant--outlined:enabled:hover {
        background-color: ${theme.color.primary};
        text-decoration-color: transparent;
      }

      .variant--outlined,
      .variant--filled:enabled:active,
      .variant--filled:enabled:focus,
      .variant--filled:enabled:hover {
        color: ${theme.color.primary};
      }

      .variant--outlined {
        background-color: transparent;
      }

      .variant--filled:enabled:active,
      .variant--filled:enabled:focus,
      .variant--filled:enabled:hover {
        background-color: ${theme.color.white};
        border-color: ${theme.color.white};
      }

      .variant--filled.color--primary,
      .variant--outlined.color--primary:enabled:active,
      .variant--outlined.color--primary:enabled:focus,
      .variant--outlined.color--primary:enabled:hover {
        background-color: ${theme.color.interactive};
        border-color: ${theme.color.interactive};
        color: ${theme.color.white};
        text-decoration-color: transparent;
      }

      .variant--outlined.color--primary,
      .variant--outlined.color--primary:disabled:active,
      .variant--outlined.color--primary:disabled:focus,
      .variant--outlined.color--primary:disabled:hover,
      .variant--filled.color--primary:enabled:active,
      .variant--filled.color--primary:enabled:focus,
      .variant--filled.color--primary:enabled:hover {
        color: ${theme.color.interactive};
      }

      .variant--outlined.color--primary {
        border-color: ${theme.color.interactive};
      }

      // TODO: Add px and check for visual regressions
      @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}) {
        button {
          font-size: ${theme.pxToRem(theme.typography.body.lg.fontSizeDesktop)};
        }
      }
    `}</style>
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(colors)),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(types),
  variant: PropTypes.oneOf(Object.keys(variants)),
};

Button.defaultProps = {
  className: undefined,
  children: undefined,
  color: 'secondary',
  disabled: false,
  onClick: undefined,
  type: 'button',
  variant: 'none',
};

Button.colors = colors;
Button.types = types;
Button.variants = variants;

export default Button;
