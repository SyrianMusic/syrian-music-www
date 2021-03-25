import theme from './theme';

export const fontSizeMd = `
font-size: ${theme.pxToRem(17.5)};
line-height: ${theme.pxToRem(21)};
`;

export const fontSizeLg = `
font-size: ${theme.pxToRem(22.5)};
line-height: ${theme.pxToRem(27)};
`;

export const fontSizeH3 = `
font-size: ${theme.pxToRem(35)};
line-height: ${theme.pxToRem(42)};
`;

export const typography = {
  md: {
    mobile: `
        font-size: ${theme.pxToRem(0)};
        line-height: ${theme.pxToRem(0)};
        `,
    desktop: `
        font-size: ${theme.pxToRem(17.5)};
        line-height: ${theme.pxToRem(21)};
        `,
  },
  lg: {
    mobile: `
      font-size: ${theme.pxToRem(0)};
      line-height: ${theme.pxToRem(0)};
      `,
    desktop: `
      font-size: ${theme.pxToRem(22.5)};
      line-height: ${theme.pxToRem(27)};
      `,
  },
  h3: {
    mobile: `
      font-size: ${theme.pxToRem(theme.typography.h3.fontSizeMobile)};
      line-height: ${theme.pxToRem(30)};
      `,
    desktop: `
      font-size: ${theme.pxToRem(35)};
      line-height: ${theme.pxToRem(42)};
      `,
  },
};
