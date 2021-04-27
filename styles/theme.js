const rootFontSize = 16;

const typography = {
  body: {
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

const theme = {
  breakpoint: {
    mobileToDesktop: 800,
  },
  color: {
    black: '#000',
    salmon: '#ff7878',
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
