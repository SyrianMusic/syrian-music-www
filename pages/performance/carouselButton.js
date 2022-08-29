import styled from '@emotion/styled';
import theme from '../../styles/theme';

const border = `${theme.pxToRem(3)} solid ${theme.color.interactive}`;
const position = theme.pxToRem(-35);

const beforeStyles = {
  display: 'block',
  background: 'transparent',
  borderRight: border,
  borderBottom: border,
  content: '""',
  width: theme.pxToRem(20),
  height: theme.pxToRem(20),
};

const Button = styled.button({
  top: '25%',

  '&.slick-prev': {
    left: position,
    transform: 'rotate(135deg)',
    '&::before': beforeStyles,
  },

  '&.slick-next': {
    right: position,
    transform: 'rotate(-45deg)',
    '&::before': beforeStyles,
  },

  '&.slick-disabled': {
    visibility: 'hidden',
  },
});

export default <Button tabIndex={0} />;
