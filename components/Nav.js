import styled from '@emotion/styled';
import theme from '../styles/theme';

const Nav = styled.nav({
  '& a:link, & a:visited': {
    color: 'inherit',
    outline: 'none',
    textDecoration: 'underline',
    textDecorationColor: 'transparent',
    transition: 'color 0.2s ease-in-out, text-decoration-color 0.2s ease-in-out',
  },

  '& a:focus, & a:hover': {
    color: theme.color.interactive,
    textDecorationColor: theme.color.interactive,
  },

  '& a:active': {
    filter: 'brightness(0.9)',
  },

  // TODO: Remove this if it's not being used anywhere
  'ul li > span': {
    color: theme.color.interactive,
  },
});

export default Nav;
