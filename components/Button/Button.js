import styled from '@emotion/styled';
import theme from '../../styles/theme';
import * as mixins from '../../styles/mixins';
import UnstyledButton from './UnstyledButton';

const Button = styled(UnstyledButton)([
  mixins.typography.lg.mobile,
  {
    backgroundColor: theme.color.interactive,
    border: `1px solid ${theme.color.interactive}`,
    color: theme.color.white,
    padding: '1em 1.25em',
    textDecoration: 'none',
    minWidth: theme.pxToRem(137),

    '&:enabled:hover, :enabled:focus': {
      color: theme.color.white,
    },

    '&:enabled:hover': {
      filter: `drop-shadow(0px 2px 6px ${theme.color.primary}60)`,
    },

    '&:enabled:focus': {
      backgroundColor: theme.color.focus,
    },

    '&:enabled:active': {
      backgroundColor: theme.color.white,
      color: theme.color.interactive,
    },

    '&:enabled:focus:active': {
      color: theme.color.focus,
    },

    '&:disabled': {
      backgroundColor: theme.color.disabled,
      borderColor: theme.color.disabled,
      color: theme.color.white,
    },

    [theme.mq.mobileToDesktop]: [{}, mixins.typography.lg.desktop],
  },
]);

export default Button;
