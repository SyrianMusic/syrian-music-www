import theme from '../../styles/theme';

export const withStoryGrid = (Story) => (
  <div
    css={{
      '*': { marginBottom: theme.spacing.get(16) },

      [theme.mq.mobileToDesktop]: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: theme.spacing.get(16),
        justifyItems: 'center',
      },
    }}>
    {Story()}
  </div>
);
