import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from '../../styles/theme';

const colors = {
  none: 'none',
  white: 'white',
};

const types = ['button', 'submit'];

const variants = {
  none: 'none',
  outlined: 'outlined',
};

const Button = ({ className, children, color, disabled, onClick, type, variant }) => (
  <button
    className={cx(
      { [`color--${color}`]: color, [`variant--${variant}`]: variant !== 'none' },
      className,
    )}
    disabled={disabled}
    onClick={onClick}
    type={type}>
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
        transition: opacity 0.2s ease-in-out;
      }

      button:disabled {
        cursor: not-allowed;
      }

      .color--none {
        color: ${theme.color.primary};
        text-decoration: underline;
        text-decoration-color: transparent;
        transition: color 0.2s ease-in-out, text-decoration-color 0.2s ease-in-out;
      }

      .color--none:active,
      .color--none:focus,
      .color--none:hover {
        color: ${theme.color.interactive};
        text-decoration-color: ${theme.color.interactive};
      }

      .color--white {
        border-color: ${theme.color.white};
        color: ${theme.color.white};
      }

      .color--white:disabled {
        opacity: 0.5;
      }

      .color--white:enabled:active,
      .color--white:enabled:focus,
      .color--white:enabled:hover {
        background-color: ${theme.color.white};
        color: ${theme.color.interactive};
      }

      .variant--outlined {
        border-width: ${theme.pxToRem(2)};
        border-style: solid;
        color: ${theme.color.white};
        background-color: transparent;
        padding: ${theme.pxToRem(8)};
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
      }

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
  color: 'none',
  disabled: false,
  onClick: undefined,
  type: 'button',
  variant: 'none',
};

Button.colors = colors;
Button.types = types;
Button.variants = variants;

export default Button;
