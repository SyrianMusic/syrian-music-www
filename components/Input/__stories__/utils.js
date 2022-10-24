import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export const getStoryTitle = (title) => `Inputs/${title}`;

export const InputGrid = styled.div({
  '*': { marginBottom: theme.spacing.get(16) },

  [theme.mq.mobileToDesktop]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: theme.spacing.get(16),
  },
});
