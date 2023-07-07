import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textAppBar: '#FFFFFF',
    primary: '#0366d6',
    danger: '#ff0e0e',
    error: '#d73a4a',
    appBarBackground: '#404040',
    menuBarBackGround: '#cccccc',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
    superBold: '900',
  },
}

export default theme
