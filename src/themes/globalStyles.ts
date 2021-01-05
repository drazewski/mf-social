
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    accent: Palette['primary'];
    active: Palette['primary'];
    activeMenuItem: Palette['primary'];
    avatarBg: Palette['primary'];
    buttonMain: Palette['primary'];
    cautious: Palette['primary'];
    checkCircleIcon: Palette['primary'];
    dialogTitleBg: Palette['primary'];
    enabled: Palette['primary'];
    halfOpacity: Palette['primary'];
    header: Palette['primary'];
    headerButtonsBg: Palette['primary'];
    helpIcon: Palette['primary'];
    highlight: Palette['primary'];
    mainContainerBg: Palette['primary'];
    messagesHigh: Palette['primary'];
    messagesLow: Palette['primary'];
    messagesMedium: Palette['primary'];
    paper: Palette['primary'];
    premiumHeaderButtonsBg: Palette['primary'];
    reversedPaper: Palette['primary'];
    reversedText: Palette['primary'];
    selectedVibrant: Palette['primary'];
    tertiary: Palette['primary'];
    urlPreviewBackground: Palette['primary'];
    urlPreviewBorder: Palette['primary'];
    postItemBorder: Palette['primary'];
    advancedSearchSubjectBackground: Palette['primary'];
  }

  interface PaletteOptions {
    accent: PaletteOptions['primary'];
    checkCircleIcon: PaletteOptions['primary'];
    header: PaletteOptions['primary'];
    headerButtonsBg: PaletteOptions['primary'];
    helpIcon: PaletteOptions['primary'];
    highlight: PaletteOptions['primary'];
    mainContainerBg: PaletteOptions['primary'];
    paper: PaletteOptions['primary'];
    reversedPaper: PaletteOptions['primary'];
    reversedText: PaletteOptions['primary'];
    urlPreviewBackground: PaletteOptions['primary'];
    urlPreviewBorder: PaletteOptions['primary'];
    postItemBorder: PaletteOptions['primary'];
    advancedSearchSubjectBackground: PaletteOptions['primary'];
  }
}

export const globalStyles = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1040,
      lg: 1280,
      xl: 1640,
    },
  },
  palette: {
    active: {
      main: '#48A2D9'
    },
    activeMenuItem: {
      main: '#41CCFF'
    },
    avatarBg: {
      main: '#BB77FA'
    },
    buttonMain: { 
      main: '#317CD5'
    },
    cautious: {
      main: '#EFB135'
    },
    dialogTitleBg: {
      main: '#CCE3E7'
    },
    enabled: {
      main: '#3BBC66',
      light: '#CFEFDA',
    },
    error: {
      main: '#DC5656'
    },
    grey: {
      500: '#999',
      700: '#666',
      800: '#333'
    },
    halfOpacity: {
      main: 'rgba(255, 255, 255, 0.5)'
    },
    info: {
      main: '#5476D8' 
    },
    messagesHigh: {
      main: '#21D634'
    },
    messagesLow: {
      main: '#FA4D00'
    },
    messagesMedium: {
      main: '#FF7F00' 
    },
    premiumHeaderButtonsBg: {
      main: '#976ABE'
    },
    selectedVibrant: {
      main: '#6751FF'
    },
    success: {
      main: '#7AE046'
    },
    tertiary: {
      main:'#888'
    },
    warning: {
      main: '#F19511'
    },
  },
  shape: {
    borderRadius: 6
  },
  typography: {
    fontFamily: 'Inter, Arial',
    h1: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '-0.36px'
    },
    h2: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-0.3px'
    },
    h3: {
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: '-0.24px'
    },
    h4: { 
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '-0.17px'
    },
    h5: {
      fontSize: 12,
      letterSpacing: 0
    },
    h6: {
      fontSize: 12, 
      letterSpacing: 0,
    },
    caption: {
      fontSize: 13,
      letterSpacing: 0
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.4,
    }
  }
};
