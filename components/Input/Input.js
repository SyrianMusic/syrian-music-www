import styled from '@emotion/styled';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import * as mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import HelperText, { ErrorText } from './HelperText';

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

export const StyledInput = styled.input(({ error }) => {
  let styles = [inputStyles];

  if (error) {
    styles = [...styles, { borderColor: theme.color.error }];
  }

  return styles;
});

const Input = ({ className, error, helperText, type, ...props }) => {
  return (
    <div className={className}>
      <StyledInput {...props} error={error} type={type} />
      <HelperText error={Boolean(error)}>{error ? error : helperText}</HelperText>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  className: undefined,
  error: null,
  helperText: null,
  type: 'text',
};

export default Input;

export const FormikInput = (props) => {
  const [field, meta] = useField(props);

  let error;

  if (meta.touched && meta.error) {
    error = meta.error;
  }

  return <Input {...field} {...props} error={error} />;
};
