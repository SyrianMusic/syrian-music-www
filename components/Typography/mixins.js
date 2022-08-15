import theme from '../../styles/theme';

export const linkStyles = {
  '&, &:visited': {
    color: theme.color.interactive,
    textDecorationColor: 'transparent',
    transition: 'text-decoration-color 0.2s ease-in-out',
  },
  '&:hover': {
    textDecorationColor: theme.color.interactive,
  },
  '&:active': {
    filter: 'brightness(0.9)',
  },
};

export const linkStylesBlack = {
  '&, &:visited': {
    color: theme.color.primary,
    textDecorationColor: 'transparent',
    transition: 'color, text-decoration-color 0.2s ease-in-out',
  },
  '&:hover': {
    color: theme.color.interactive,
    textDecorationColor: theme.color.interactive,
  },
  '&:active': {
    filter: 'brightness(0.9)',
  },
};
