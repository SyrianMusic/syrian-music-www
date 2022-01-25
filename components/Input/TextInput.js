import { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getId } from './utils';
import theme from '../../styles/theme';

const InputWrapper = styled.div`
  display: inline-block;
  font-size: ${theme.pxToRem(theme.typography.input.fontSizeMobile)};
  line-height: ${theme.pxToRem(theme.typography.input.lineHeightMobile)};

  ${theme.mq.md} {
    font-size: ${theme.pxToRem(theme.typography.input.fontSizeDesktop)};
    line-height: ${theme.pxToRem(theme.typography.input.lineHeightDesktop)};
  }
`;

const inputResetStyles = css`
  -webkit-appearance: none;
  font: inherit;
  border-radius: 0;
  outline: none;
  padding: 0;
  margin: 0;
`;

const Input = styled.input`
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

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${theme.color.error};
    `};
`;

const Label = styled.span`
  display: none;
`;

const Messages = styled.div`
  font-size: ${theme.pxToRem(16)};
  margin-top: ${theme.pxToRem(12)};
`;

const HelpText = styled.div``;

const Error = styled.div`
  color: ${theme.color.error};
`;

export const TextInput = ({
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
    <InputWrapper className={className}>
      <Input
        id={id}
        type="text"
        name={name}
        placeholder={placeholder || label}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        disabled={disabled}
        hasError={Boolean(error)}
        required={required}
      />
      <Label htmlFor={id}>{label}</Label>
      <Messages>
        {helpText && <HelpText>{helpText}</HelpText>}
        {[...errors, error].map((error) => (
          <Error key={error}>{error}</Error>
        ))}
      </Messages>
    </InputWrapper>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
};

TextInput.defaultProps = {};
