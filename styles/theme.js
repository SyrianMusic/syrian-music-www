const baseFontSize = 8;

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
      fontSizeMin: 3,
      fontSizeMax: baseFontSize,
    },
    desktop: {
      fontSizeMin: baseFontSize * 0.5,
      fontSizeMax: baseFontSize,
    },
  },
  layout: {
    contentWidthMin: 320,
    contentWidthMax: 960, // 1920 / 2
    gutterWidth: 236,
  },
  pxToEm: (px, base = baseFontSize * 2) => `${px / base}em`,
  pxToPercent: (px, base) => `${(px / base) * 100}%`,
  pxToRem: (px) => `${px / (baseFontSize * 2)}rem`,
};

export default theme;
