import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import * as mixins from '../../styles/mixins';
import theme from '../../styles/theme';

export const inputBorderWidth = 1;

export const inputPadding = {
  top: 20,
  left: 16,
  bottom: 16,
};

const Wrapper = styled.div(({ isDisabled, hasError, hasSuccess }) => {
  let disabledStyles;

  if (isDisabled) {
    disabledStyles = {
      '& label, &:focus + label': {
        backgroundColor: theme.color.dimGray,
      },
    };
  }

  let inputStyles;

  if (hasError) {
    inputStyles = {
      input: {
        borderColor: theme.color.error,
      },
    };
  } else if (hasSuccess) {
    inputStyles = {
      input: {
        borderColor: theme.color.success,
      },
    };
  }

  return [disabledStyles, inputStyles, { position: 'relative' }];
});

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

export const StyledInput = styled.input(inputStyles);

const Label = styled.label([
  { [theme.mq.mobileToDesktop]: [{}, mixins.typography.sm.desktop] },
  {
    backgroundColor: theme.color.interactive,
    color: theme.color.white,
    position: 'absolute',
    top: 0,
    left: theme.pxToRem(inputPadding.left),
    opacity: 0,
    padding: `${theme.pxToRem(4)} ${theme.pxToRem(8)}`,
    transition: 'all 0.2s ease-in-out',
  },
  mixins.typography.sm.mobile,
]);

const HelperText = styled.div(({ isError, isSuccess }) => {
  let color = 'transparent';

  if (isError || isSuccess) {
    color = theme.color.white;
  }

  let backgroundColor;

  if (isError) {
    backgroundColor = theme.color.withOpacity(theme.color.error, 0.8);
  } else if (isSuccess) {
    backgroundColor = theme.color.withOpacity(theme.color.success, 0.8);
  }

  return [
    { [theme.mq.mobileToDesktop]: [{}, mixins.typography.sm.desktop] },
    {
      backgroundColor,
      boxSizing: 'content-box',
      color,
      display: 'inline-block',
      minHeight: `${theme.typography.body.sm.lineHeightMobile}px`,
      padding: `${theme.pxToRem(2)} ${theme.pxToRem(8)} ${theme.pxToRem(4)}`,
      transition: `background-color 0.2s ease-in-out, color 0.2s ease-in-out`,

      [theme.mq.mobileToDesktop]: {
        minHeight: `${theme.typography.body.sm.lineHeightDesktop}px`,
      },
    },
    mixins.typography.sm.mobile,
  ];
});

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
    <Wrapper className={className} isDisabled={disabled} hasError={error} hasSuccess={success}>
      <StyledInput
        id={id}
        name={name}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />

      <Label htmlFor={id}>
        {label}{' '}
        {required && (
          <span
            css={[
              { [theme.mq.mobileToDesktop]: [{}, mixins.typography.xs.desktop] },
              {
                display: 'inline-block',
                marginLeft: '0.1em',
                letterSpacing: '0.03em',
                opacity: 0.8,
                textTransform: 'uppercase',
              },
              mixins.typography.xs.mobile,
            ]}>
            Required
          </span>
        )}
      </Label>

      <HelperText isError={error} isSuccess={success}>
        {message}
      </HelperText>
    </Wrapper>
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
