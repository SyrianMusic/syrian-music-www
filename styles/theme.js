const rootFontSize = 16;

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
      fontSizeMin: 6,
      fontSizeMax: rootFontSize,
    },
    desktop: {
      fontSizeMin: rootFontSize * 0.5,
      fontSizeMax: rootFontSize,
    },
  },
  layout: {
    contentWidthMin: 320,
    contentWidthMax: 960,
    gutterWidth: {
      mobile: 38,
      desktop: 118,
    },
  },
  pxToEm: (px, base = rootFontSize) => `${px / base}em`,
  pxToPercent: (px, base) => `${(px / base) * 100}%`,
  pxToRem: (px) => `${px / rootFontSize}rem`,
};

export default theme;
