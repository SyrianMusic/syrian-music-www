import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import * as mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import { ErrorText } from './HelperText';
import useValidation from './useValidation';

export const inputBorderWidth = 1;

export const inputPadding = {
  top: 20,
  left: 16,
  bottom: 16,
};

const borderColor = theme.color.accentTan;

export const inputStyles = [
  { [theme.mq.mobileToDesktop]: [{}, mixins.typography.lg.desktop] },
  {
    WebkitAppearance: 'none',
    font: 'inherit',
    backgroundColor: theme.color.white,
    border: `1px solid ${theme.color.withOpacity(borderColor, 0.4)}`,
    borderRadius: 0,
    display: 'block',
    outline: 'none',
    padding: `${theme.pxToRem(inputPadding.top)} ${theme.pxToRem(
      inputPadding.left,
    )} ${theme.pxToRem(inputPadding.bottom)}`,
    transition: 'border-color 0.2s ease-in-out',
    width: '100%',

    '&::placeholder': {
      color: theme.color.placeholder,
    },

    '&:focus': { borderColor },

    '&:invalid': {
      borderColor: theme.color.error,
    },

    '&:disabled': {
      borderColor: theme.color.disabled,
      cursor: 'not-allowed',

      '&, &::placeholder': {
        color: theme.color.disabled,
      },
    },
  },
  mixins.typography.lg.mobile,
];

export const StyledInput = styled.input(inputStyles);

const Input = ({ required, ...props }) => {
  const input = useRef(null);

  const { error, isRequired, handleBlur, handleChange, handleInvalid } = useValidation(input, {
    required,
  });

  return (
    <>
      <StyledInput
        ref={input}
        onBlur={handleBlur}
        onInvalid={handleInvalid}
        onChange={handleChange}
        required={isRequired}
        {...props}
      />
      <ErrorText>{error}</ErrorText>
    </>
  );
};

Input.propTypes = { required: PropTypes.bool };

Input.defaultProps = { required: false };

export default Input;
