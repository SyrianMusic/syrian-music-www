import styled from '@emotion/styled';
import theme from '../../styles/theme';

const HelperText = styled.p({
  fontSize: theme.pxToRem(15),
  marginTop: theme.spacing.get(8),

  [theme.mq.mobileToDesktop]: {
    fontSize: theme.pxToRem(16),
  },
});

export default HelperText;
