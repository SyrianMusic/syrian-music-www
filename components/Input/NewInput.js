import { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getId } from './utils';
import theme from '../../styles/theme';

const inputResetStyles = css`
  -webkit-appearance: none;
  font: inherit;
  border-radius: 0;
  outline: none;
  padding: 0;
  margin: 0;
`;

const errorStyles = css`
  input {
    border-color: ${theme.color.error};
  }
`;

const lineHeight = {
  mobile: theme.pxToRem(theme.typography.input.lineHeightMobile),
  desktop: theme.pxToRem(theme.typography.input.lineHeightDesktop),
};

const InputWrapper = styled.div`
  display: inline-block;
  font-size: ${theme.pxToRem(theme.typography.input.fontSizeMobile)};
  line-height: ${lineHeight.mobile};

  ${theme.mq.md} {
    font-size: ${theme.pxToRem(theme.typography.input.fontSizeDesktop)};
    line-height: ${lineHeight.desktop};
  }

  input {
    ${inputResetStyles};

    border: ${theme.pxToRem(1)} solid ${theme.color.accentTan};
    padding: 0 ${theme.pxToRem(12)};
    height: ${theme.pxToRem(64)};

    ::placeholder {
      color: ${theme.color.placeholder};
    }

    :disabled {
      background-color: ${theme.color.white};
      border-color: ${theme.color.disabled};
      color: ${theme.color.disabled};
    }

    :focus {
      border-width: ${theme.pxToRem(2)};
      outline: none;
    }
  }

  label {
    display: none;
  }

  ${({ hasError }) => hasError && errorStyles};
`;

const Messages = styled.div`
  font-size: ${theme.pxToRem(16)};
  margin-top: ${theme.pxToRem(12)};
  min-height: ${lineHeight.mobile};

  ${theme.mq.md} {
    min-height: ${lineHeight.desktop};
  }
`;

const HelpText = styled.div``;

const Error = styled.div`
  color: ${theme.color.error};
`;

export const Input = ({
  className,
  label,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  helpText,
  required,
}) => {
  const id = getId();
  const [errors, setErrors] = useState([]);

  const handleBlur = (e) => {
    let newErrors = [];

    if (e.target.validity.valueMissing) {
      newErrors.push('*This field is required.');
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    setErrors([]);

    if (typeof onChange === 'function') {
      onChange(e);
    }
  };

  return (
    <InputWrapper className={className} hasError={Boolean(error)}>
      <input
        id={id}
        type="text"
        name={name}
        placeholder={placeholder || label}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        disabled={disabled}
        required={required}
      />
      <label htmlFor={id}>{label}</label>
      <Messages>
        {helpText && <HelpText>{helpText}</HelpText>}
        {[...errors, error].map((error) => (
          <Error key={error}>{error}</Error>
        ))}
      </Messages>
    </InputWrapper>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  helpText: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

Input.defaultProps = {
  className: undefined,
  onChange: undefined,
  placeholder: undefined,
  error: undefined,
  helpText: undefined,
  disabled: false,
  required: false,
};
