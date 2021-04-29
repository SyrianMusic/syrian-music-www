import cx from 'classnames';
import PropTypes from 'prop-types';
import * as mixins from '../styles/mixins';
import theme from '../styles/theme';

const Input = ({
  className,
  disabled,
  error,
  name,
  label,
  onBlur,
  onChange,
  required,
  success,
  type,
  value,
}) => {
  let message;

  if (error) {
    message = error;
  } else if (success) {
    message = success;
  }

  return (
    <div
      className={cx(
        { 'component-Input-error': error, 'component-Input-success': success },
        className,
      )}>
      <div
        className={cx({ 'component-Input-disabled': disabled }, 'component-Input-label-wrapper')}>
        <label>
          {label} {required && <span>Required</span>}
          <input
            name={name}
            disabled={disabled}
            onBlur={onBlur}
            onChange={onChange}
            type={type}
            value={value}
          />
        </label>
      </div>

      <div className="component-Input-message">{message}</div>

      <style jsx>{`
        .component-Input-label-wrapper {
          background-color: ${theme.color.white};
          border: ${theme.pxToRem(2)} solid transparent;
          padding: ${theme.pxToRem(8)};
          transition: border-color 0.2s ease-in-out;
        }

        .component-Input-disabled,
        .component-Input-disabled input {
          background-color: ${theme.color.lightGray};
          cursor: not-allowed;
        }

        .component-Input-error > .component-Input-label-wrapper {
          border-color: ${theme.color.error};
        }

        label,
        input {
          display: block;
          width: 100%;
        }

        label {
          ${mixins.typography.sm.mobile};
          color: ${theme.color.primary};
          transition: color 0.2s ease-in-out;
        }

        label:focus-within {
          color: ${theme.color.salmon};
        }

        label span {
          ${mixins.typography.xs.mobile};
          color: ${theme.color.secondary};
          display: inline-block;
          margin-left: 0.1em;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        input {
          ${mixins.typography.lg.mobile};
          border: none;
          font: inherit;
          margin-top: ${theme.pxToRem(8)};

          outline: none;
          padding: 0;
          width: 100%;
        }

        .component-Input-message {
          ${mixins.typography.sm.mobile};
          box-sizing: content-box;
          background-color: transparent;
          color: transparent;
          min-height: ${theme.typography.body.sm.lineHeightMobile}px;
          padding: ${theme.pxToRem(2)} ${theme.pxToRem(8)} ${theme.pxToRem(4)};
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        }

        .component-Input-error .component-Input-message,
        .component-Input-success .component-Input-message {
          color: ${theme.color.white};
        }

        .component-Input-error .component-Input-message {
          background-color: ${theme.color.error};
        }

        .component-Input-success .component-Input-message {
          background-color: ${theme.color.success};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          label {
            ${mixins.typography.sm.desktop};
          }

          label span {
            ${mixins.typography.xs.desktop};
          }

          input {
            ${mixins.typography.lg.desktop};
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

export default Input;
