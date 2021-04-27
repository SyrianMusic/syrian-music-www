import { convertCompilerOptionsFromJson } from 'typescript';

const rootFontSize = 16;

const typography = {
  body: {
    sm: {
      fontSizeMobile: 10,
      lineHeightMobile: 12,
      fontSizeDesktop: 15,
      lineHeightDesktop: 18,
    },
    md: {
      fontSizeMobile: 12.5,
      lineHeightMobile: 15,
      fontSizeDesktop: 17.5,
      lineHeightDesktop: 21,
    },
    lg: {
      fontSizeMobile: 17.5,
      lineHeightMobile: 21,
      fontSizeDesktop: 22.5,
      lineHeightDesktop: 27,
    },
    tagName: 'p',
  },
  h1: {
    fontSizeMobile: 0, // No examples of this in design
    lineHeightMobile: 0, // No examples of this in design
    fontSizeDesktop: 42.5,
    lineHeightDesktop: 51,
    tagName: 'h1',
  },
  h3: {
    fontSizeMobile: 25,
    lineHeightMobile: 30,
    fontSizeDesktop: 35,
    lineHeightDesktop: 42,
    tagName: 'h3',
  },
};

// https://coolors.co/ff7878-000000-ffffff-666666-f63030
const colors = {
  white: '#fff',
  dimGray: '#666',
  black: '#000',
  firebrick: '#ab2323',
  lightCoral: '#ff7878',
};

const theme = {
  breakpoint: {
    mobileToDesktop: 800,
  },
  color: {
    ...colors,
    primary: colors.black,
    secondary: undefined,
    interactive: colors.lightCoral,
    disabled: undefined,
    error: colors.firebrick,
    salmon: colors.lightCoral,
  },
  font: {
    mobile: {
      fontSizeMin: rootFontSize,
      fontSizeMax: rootFontSize * 1.5,
    },
    desktop: {
      fontSizeMin: rootFontSize * 0.75,
      fontSizeMax: rootFontSize,
    },
  },
  layout: {
    contentWidthMin: 375,
    contentWidthMax: 960,
    gutter: {
      mobile: {
        left: 45,
        right: 48,
      },
      desktop: 118,
    },
  },
  pxToEm: (px, base = rootFontSize) => `${px / base}em`,
  pxToPercent: (px, base) => `${(px / base) * 100}%`,
  pxToRem: (px) => `${px / rootFontSize}rem`,
  typography,
};

export default theme;
