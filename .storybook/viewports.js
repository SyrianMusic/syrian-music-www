import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const viewports = {
  ...MINIMAL_VIEWPORTS,
  mobile1: {
    name: 'Small mobile',
    styles: {
      height: '812px',
      width: '375px',
    },
    type: 'mobile',
  },
};

export const viewportWidths = Object.values(viewports).map(({ styles }) =>
  parseInt(styles.width.replace('px', '')),
);
