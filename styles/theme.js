const rootFontSize = 16;

const typography = {
  body: {
    md: {
      fontSizeMobile: 12.5,
      fontSizeDesktop: 17.5,
    },
    lg: {
      fontSizeMobile: 17.5,
      fontSizeDesktop: 22.5,
    },
    tagName: 'p',
  },
  h1: {
    fontSizeMobile: 0, // No examples of this in design
    fontSizeDesktop: 42.5,
    tagName: 'h1',
  },
  h3: {
    fontSizeMobile: 25,
    fontSizeDesktop: 35,
    tagName: 'h3',
  },
};

const theme = {
  breakpoint: {
    mobileToDesktop: 550,
  },
  color: {
    black: '#000',
    salmon: '#ff7878',
  },
  font: {
    mobile: {
      fontSizeMin: rootFontSize,
      fontSizeMax: rootFontSize * 2,
    },
    desktop: {
      fontSizeMin: rootFontSize * 0.5,
      fontSizeMax: rootFontSize,
    },
  },
  layout: {
    contentWidthMin: 375,
    contentWidthMax: 960,
    gutter: {
      mobile: {
        left: 45 * 2,
        right: 48 * 2,
      },
      desktop: 118,
    },
    gutterWidth: {
      mobile: 38,
      desktop: 118,
    },
  },
  pxToEm: (px, base = rootFontSize) => `${px / base}em`,
  pxToPercent: (px, base) => `${(px / base) * 100}%`,
  pxToRem: (px) => `${px / rootFontSize}rem`,
  typography,
};

export default theme;
