const defaultFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Raleway',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
];

const colors = {
  yellow: [
    '#FFE664',
    '#FFD80C', //Primary
    '#E5C100',
  ],
  blue: '#1A41AC',
  light: ['#FFFFFF', '#FCFCFA', '#F5F4F2', '#F0EFEB', '#EBEAE3'],
  dark: ['#D9D6C7', '#A6A28E', '#706C55', '#3D3A28', '#000000'],
};

export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: defaultFontStack.join(),
    heading: 'Raleway',
    monospace: 'Menlo, monospace',
  },
  colors: {
    ...colors,
    text: colors.dark[3],
    background: colors.light[3],
    primary: colors.yellow[1],
    muted: colors.dark[0],
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 64],
  lineHeights: {
    body: 1.45,
    heading: 1.1,
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  sizes: {
    default: '90vw',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontWeight: 'body',
      fontFamily: 'body',
      lineHeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: [5, 6, 7],
      m: 0,
    },
  },
  layout: {
    header: {
      bg: 'primary',
      color: 'text',
      height: '64px',
      display: 'flex',
      p: 3,
      justifyContent: 'space-between',
      h1: {
        variant: 'text.heading',
        fontSize: [5, 6, 7],
        m: 0,
      },
      button: {
        bg: 'transparent',
        border: 0,
        p: 0,
        outline: 0,
        cursor: 'pointer',
      },
    },
    main: {
      width: 'default',
      mx: 'auto',
    },
  },
};
