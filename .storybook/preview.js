import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      mobile1: {
        name: 'Small mobile',
        styles: {
          height: '812px',
          width: '375px',
        },
        type: 'mobile',
      },
    },
  },
};
