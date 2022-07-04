const mobileToDesktop = 800;

const breakpoints = {
  mobileToDesktop,
  md: mobileToDesktop,
};

const mq = Object.entries(breakpoints).reduce((acc, [key, breakpoint]) => {
  acc[key] = `@media (min-width: ${breakpoint}px)`;
  return acc;
}, {});

const rootFontSize = 16;

const pxToEm = (px, base = rootFontSize) => `${px / base}em`;
const pxToPercent = (px, base) => `${(px / base) * 100}%`;
const toRem = (num) => `${num}rem`;
const pxToRem = (px) => `${px / rootFontSize}rem`;

const spacing = {
  8: toRem(0.5),
  16: toRem(1),
  24: toRem(1.5),
  32: toRem(2),
  40: toRem(2.5),
  48: toRem(3),
  56: toRem(3.5),
  64: toRem(4),
  72: toRem(4.5),
  80: toRem(5),
  88: toRem(5.5),
  96: toRem(6),
};

const typography = {
  body: {
    xs: {
      fontSizeMobile: 8,
      lineHeightMobile: 10,
      fontSizeDesktop: 10,
      lineHeightDesktop: 12,
    },
    sm: {
      fontSizeMobile: 10,
      lineHeightMobile: 12,
      fontSizeDesktop: 18,
      lineHeightDesktop: 20,
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
// TODO: Organize colors by function: http://lonelyplanet.github.io/backpack-ui/?path=/story/styles--design-tokens
const colors = {
  white: '#ffffff',
  dimGray: '#666666',
  spanishGray: '#999999',
  lightGray: '#cccccc',
  cultured: '#eeeeee',
  black: '#000000',
  linen: '#fbecdd',
  windsorTan: '#a95b00',
  lightCoral: '#ff7878',
  red: '#f30000',
  spanishVeridian: '#007f5c',
};

const theme = {
  breakpoint: breakpoints,
  color: {
    ...colors,
    primary: colors.black,
    secondary: colors.spanishGray,
    interactive: colors.lightCoral,
    disabled: colors.cultured,
    error: colors.red,
    success: colors.spanishVeridian,
    salmon: colors.lightCoral,
    accentTan: colors.windsorTan,
    withOpacity: (color, opacity = 1) => {
      const opacityHex = Number(Math.floor(255 * opacity)).toString(16);
      return `${color}${opacityHex}`;
    },
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
  mq,
  pxToEm,
  pxToPercent,
  pxToRem,
  spacing,
  typography,
  zIndex: {
    transcriptions: {
      pdfViewer: 1,
      errorMessage: 2,
    },
    menuOverlay: 100000,
  },
};

export default theme;
