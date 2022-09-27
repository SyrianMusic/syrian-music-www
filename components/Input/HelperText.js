import styled from '@emotion/styled';
import theme from '../../styles/theme';

const HelperText = styled.p({
  fontSize: theme.pxToRem(15),
  marginTop: theme.spacing.get(8),
  minHeight: '1em',

  [theme.mq.mobileToDesktop]: {
    fontSize: theme.pxToRem(16),
  },
});

export const ErrorText = styled(HelperText)({ color: theme.color.error });

export default HelperText;
