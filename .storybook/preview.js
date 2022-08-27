import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const viewports = {
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

const viewportWidths = Object.values(viewports).map(({ styles }) => styles.width);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  chromatic: { viewports: viewportWidths },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  viewport: { viewports },
};
