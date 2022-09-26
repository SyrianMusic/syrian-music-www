import styled from '@emotion/styled';
import theme from '../styles/theme';

export const focusColor = `${theme.color.interactive}BF`;

const UnstyledButton = styled.button({
  '-webkit-appearance': 'none',
  background: 'none',
  border: 'none',
  color: theme.color.primary,
  font: 'inherit',
  fontSize: theme.pxToRem(theme.typography.body.lg.fontSizeMobile),
  outline: 'none',
  padding: 0,
  cursor: 'pointer',
  textDecoration: 'underline',
  textDecorationColor: 'transparent',
  transition: 'all 0.2s ease-in-out',

  '&:enabled:hover': {
    color: theme.color.interactive,
    textDecorationColor: theme.color.interactive,
  },

  '&:enabled:focus': {
    color: focusColor,
    textDecorationColor: focusColor,
  },

  '&:enabled:active': {
    textDecorationColor: 'transparent',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    color: theme.color.disabled,
  },
});

export default UnstyledButton;
