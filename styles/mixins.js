import theme from './theme';

export const gutters = {
  margin: {
    mobile: `
      margin-left: ${theme.pxToRem(theme.layout.gutter.mobile.left)};
      margin-right: ${theme.pxToRem(theme.layout.gutter.mobile.right)};
      `,
    desktop: `
      margin-left: ${theme.pxToRem(theme.layout.gutter.desktop)};
      margin-right: ${theme.pxToRem(theme.layout.gutter.desktop)};
      `,
  },
  padding: {
    mobile: `
      padding-left: ${theme.pxToRem(theme.layout.gutter.mobile.left)};
      padding-right: ${theme.pxToRem(theme.layout.gutter.mobile.right)};
      `,
    desktop: `
      padding-left: ${theme.pxToRem(theme.layout.gutter.desktop)};
      padding-right: ${theme.pxToRem(theme.layout.gutter.desktop)};
      `,
  },
};

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
