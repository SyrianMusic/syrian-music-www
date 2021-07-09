import cx from 'classnames';
import PropTypes from 'prop-types';
import * as mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const inputPadding = {
  top: 20,
  left: 16,
  bottom: 16,
};

export const Input = ({
  className,
  disabled,
  error,
  name,
  label,
  onBlur,
  onChange,
  placeholder,
  required,
  success,
  type,
  value,
}) => {
  const id = `${name}-input`;

  let message;

  if (error) {
    message = error;
  } else if (success) {
    message = success;
  }

  return (
    <div
      className={cx(
        'component-Input-root',
        {
          'component-Input-disabled': disabled,
          'component-Input-error': error,
          'component-Input-success': success,
        },
        className,
      )}>
      <input
        id={id}
        name={name}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <label htmlFor={id}>
        {label} {required && <span className="component-Input-required">Required</span>}
      </label>

      <div className="component-Input-message">{message}</div>

      <style jsx>{`
        .component-Input-root {
          position: relative;
        }

        input {
          font: inherit;
          ${mixins.typography.lg.mobile};
          background-color: ${theme.color.withOpacity(theme.color.white, 0.9)};
          border: ${theme.pxToRem(1)} solid ${theme.color.interactive};
          display: block;
          margin-top: ${theme.pxToRem(8)};
          outline: none;
          padding: ${theme.pxToRem(inputPadding.top)} ${theme.pxToRem(inputPadding.left)}
            ${theme.pxToRem(inputPadding.bottom)};
          transition: border-color 0.2s ease-in-out, font-size 0.2s ease-in-out,
            line-height 0.2s ease-in-out;
          width: 100%;
        }

        input::placeholder {
          color: ${theme.color.withOpacity(theme.color.primary, 0.4)};
        }

        input:focus {
          border-color: ${theme.color.primary};
        }

        label {
          ${mixins.typography.sm.mobile};
          background-color: ${theme.color.interactive};
          color: ${theme.color.white};
          position: absolute;
          top: 0;
          left: ${theme.pxToRem(inputPadding.left)};
          opacity: 0;
          padding: ${theme.pxToRem(4)} ${theme.pxToRem(8)};
          transition: all 0.2s ease-in-out;
        }

        label .component-Input-required {
          ${mixins.typography.xs.mobile};
          display: inline-block;
          margin-left: 0.1em;
          letter-spacing: 0.03em;
          opacity: 0.8;
          text-transform: uppercase;
        }

        input:not(:placeholder-shown) + label {
          opacity: 1;
          top: -${theme.pxToRem(theme.typography.body.sm.fontSizeMobile / 2)};
        }

        .component-Input-message {
          ${mixins.typography.sm.mobile};
          box-sizing: content-box;
          color: transparent;
          display: inline-block;
          min-height: ${theme.typography.body.sm.lineHeightMobile}px;
          padding: ${theme.pxToRem(2)} ${theme.pxToRem(8)} ${theme.pxToRem(4)};
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        }

        .component-Input-disabled input {
          background-color: ${theme.color.withOpacity(theme.color.dimGray, 0.2)};
          border-color: ${theme.color.dimGray};
          cursor: not-allowed;
        }

        .component-Input-disabled input,
        .component-Input-disabled input::placeholder {
          color: ${theme.color.dimGray};
        }

        .component-Input-disabled label,
        .component-Input-disabled input:focus + label {
          background-color: ${theme.color.dimGray};
        }

        .component-Input-error .component-Input-message,
        .component-Input-success .component-Input-message {
          color: ${theme.color.white};
        }

        .component-Input-error .component-Input-message {
          background-color: ${theme.color.withOpacity(theme.color.error, 0.8)};
        }

        .component-Input-error input {
          border-color: ${theme.color.error};
        }

        .component-Input-success .component-Input-message {
          background-color: ${theme.color.withOpacity(theme.color.success, 0.8)};
        }

        .component-Input-success input {
          border-color: ${theme.color.success};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          input {
            ${mixins.typography.lg.desktop};
          }

          label {
            ${mixins.typography.sm.desktop};
          }

          label .component-Input-required {
            ${mixins.typography.xs.desktop};
          }

          .component-Input-message {
            ${mixins.typography.sm.desktop};
            min-height: ${theme.typography.body.sm.lineHeightDesktop}px;
          }

          .component-Input-error-message {
            ${mixins.typography.sm.desktop};
            min-height: ${theme.typography.body.sm.lineHeightDesktop}px;
          }
        }
      `}</style>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.node,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  success: PropTypes.node,
  type: PropTypes.oneOf(['email', 'text']),
  value: PropTypes.any,
};

Input.defaultProps = {
  className: undefined,
  disabled: false,
  error: undefined,
  onBlur: undefined,
  onChange: undefined,
  required: false,
  success: undefined,
  type: 'text',
  value: undefined,
};
