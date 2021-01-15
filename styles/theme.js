const baseFontSize = 16;

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
      fontSizeMin: baseFontSize,
      fontSizeMax: 22,
    },
    desktop: {
      fontSizeMin: 8,
      fontSizeMax: baseFontSize,
    },
  },
  layout: {
    contentWidthMin: 320,
    contentWidthMax: 1920,
  },
  pxToRem: (px) => `${px / baseFontSize}rem`,
};

export default theme;
