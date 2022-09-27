import styled from '@emotion/styled';
import theme from '../../styles/theme';

const Label = styled.label({
  fontSize: theme.pxToRem(20),
  display: 'block',
  marginTop: theme.spacing.get(48),
  marginBottom: theme.spacing.get(16),

  [theme.mq.mobileToDesktop]: {
    fontSize: theme.pxToRem(24),
    marginTop: theme.spacing.get(64),
    marginBottom: theme.spacing.get(24),
  },
});

export default Label;
