import styled from '@emotion/styled';
import theme from '../styles/theme';
import UnstyledButton from './UnstyledButton';

const focusColor = `${theme.color.interactive}BF`;

const Button = styled(UnstyledButton)({
  backgroundColor: theme.color.interactive,
  border: `2px solid ${theme.color.interactive}`,
  color: theme.color.white,
  padding: `${theme.pxToRem(24)} ${theme.pxToRem(21)}`,
  textDecoration: 'none',

  '&:enabled:hover, :enabled:focus': {
    color: theme.color.white,
  },

  '&:enabled:hover': {
    filter: `drop-shadow(0px 2px 6px ${theme.color.primary}60)`,
  },

  '&:enabled:focus': {
    backgroundColor: focusColor,
  },

  '&:enabled:active': {
    backgroundColor: theme.color.white,
    color: theme.color.interactive,
  },

  '&:enabled:focus:active': {
    color: focusColor,
  },

  '&:disabled': {
    backgroundColor: theme.color.disabled,
    borderColor: theme.color.disabled,
    color: theme.color.white,
  },
});

export default Button;
