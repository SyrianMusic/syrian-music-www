import cx from 'classnames';
import PropTypes from 'prop-types';
import * as mixins from '../styles/mixins';
import theme from '../styles/theme';

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Input = ({ className, error, label, onChange, required, type, value }) => {
  return (
    <div className={cx({ 'component-Input-has-error': error }, className)}>
      <div className="component-Input-label-wrapper">
        <label>
          {label} {required && <span>Required</span>}
          <input onChange={onChange} type={type} value={value} />
        </label>
      </div>

      <div className="component-Input-error-text">{error}</div>

      <style jsx>{`
        .component-Input-label-wrapper {
          background-color: ${theme.color.white};
          border: ${theme.pxToRem(2)} solid transparent;
          padding: ${theme.pxToRem(8)};
          transition: border-color 0.2s ease-in-out;
        }

        .component-Input-has-error > .component-Input-label-wrapper {
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

        .component-Input-error-text {
          ${mixins.typography.sm.mobile};
          box-sizing: content-box;
          background-color: transparent;
          color: transparent;
          min-height: ${theme.typography.body.sm.lineHeightMobile}px;
          padding: ${theme.pxToRem(2)} ${theme.pxToRem(8)} ${theme.pxToRem(4)};
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        }

        .component-Input-has-error .component-Input-error-text {
          background-color: ${theme.color.error};
          color: ${theme.color.white};
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

          .component-Input-error-text {
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
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'text']),
  value: PropTypes.any,
};

Input.defaultProps = {
  className: undefined,
  error: undefined,
  onChange: undefined,
  required: false,
  type: 'text',
  value: undefined,
};

export default Input;
