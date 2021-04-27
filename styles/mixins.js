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
        font-size: ${theme.pxToRem(theme.typography.body.md.fontSizeMobile)};
        line-height: ${theme.pxToRem(theme.typography.body.md.lineHeightMobile)};
        `,
    desktop: `
        font-size: ${theme.pxToRem(theme.typography.body.md.fontSizeDesktop)};
        line-height: ${theme.pxToRem(theme.typography.body.md.lineHeightDesktop)};
        `,
  },
  lg: {
    mobile: `
      font-size: ${theme.pxToRem(theme.typography.body.lg.fontSizeMobile)};
      line-height: ${theme.pxToRem(theme.typography.body.lg.lineHeightMobile)};
      `,
    desktop: `
      font-size: ${theme.pxToRem(theme.typography.body.lg.fontSizeDesktop)};
      line-height: ${theme.pxToRem(theme.typography.body.lg.lineHeightDesktop)};
      `,
  },
  h1: {
    mobile: `
      font-size: ${theme.pxToRem(theme.typography.h1.fontSizeMobile)};
      line-height: ${theme.pxToRem(theme.typography.h1.lineHeightMobile)};
      `,
    desktop: `
      font-size: ${theme.pxToRem(theme.typography.h1.fontSizeDesktop)};
      line-height: ${theme.pxToRem(theme.typography.h1.lineHeightDesktop)};
    `,
  },
  h3: {
    mobile: `
      font-size: ${theme.pxToRem(theme.typography.h3.fontSizeMobile)};
      line-height: ${theme.pxToRem(theme.typography.h3.lineHeightMobile)};
      `,
    desktop: `
      font-size: ${theme.pxToRem(theme.typography.h3.fontSizeDesktop)};
      line-height: ${theme.pxToRem(theme.typography.h3.lineHeightDesktop)};
    `,
  },
};
