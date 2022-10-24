import styled from '@emotion/styled';
import theme from '../../styles/theme';

const Label = styled.label({
  fontSize: theme.pxToRem(20),
  display: 'block',
  marginBottom: theme.spacing.get(16),

  [theme.mq.mobileToDesktop]: {
    fontSize: theme.pxToRem(24),
  },
});

export default Label;