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

const typography = {
  input: {
    // TODO: No mobile designs for this
    fontSizeMobile: 20,
    lineHeightMobile: 25,
    fontSizeDesktop: 20,
    lineHeightDesktop: 25,
  },
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
  gainsboro: '#d9d9d9',
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
    placeholder: colors.gainsboro,
    primary: colors.black,
    secondary: colors.spanishGray,
    interactive: colors.lightCoral,
    disabled: colors.gainsboro,
    error: colors.lightCoral,
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
  pxToEm: (px, base = rootFontSize) => `${px / base}em`,
  pxToPercent: (px, base) => `${(px / base) * 100}%`,
  pxToRem: (px) => `${px / rootFontSize}rem`,
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
