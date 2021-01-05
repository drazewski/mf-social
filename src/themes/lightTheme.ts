import { createMuiTheme } from '@material-ui/core';
import { globalStyles } from './globalStyles';

export const lightTheme = createMuiTheme({
  ...globalStyles,
  palette: {
    ...globalStyles.palette,
    type: 'light',
    primary: {
      main: '#8751bd',
      contrastText:'#FFF',
      light: '#8751bd',
    },
    secondary: {
      main:'#2DAFC7',
      contrastText: '#FFF',
      light: '#EAEDED',
    },
    accent: {
      main: '#6558FF',
    },
    highlight: {
      main: '#9144DE',
    },
    paper: {
      main: '#FFF',
    },
    reversedPaper: {
      main: '#444'
    },
    text: {
      primary: '#333333'
    },
    reversedText: {
      main: '#FFF'
    },
    header: {
      main: '#5A2A83'
    },
    headerButtonsBg: {
      main: '#E3E3E3'
    },
    mainContainerBg: {
      main: '#EDEDED'
    },
    checkCircleIcon: {
      main: '#6FE36A'
    },
    helpIcon: {
      main: '#F2C221',
      light: '#FCF0C9',
    },
    urlPreviewBackground: {
      main: '#EEEEEE'
    },
    urlPreviewBorder: {
      main: '#DDDDDD'
    },
    postItemBorder: {
      main: '#E7E7E7'
    },
    advancedSearchSubjectBackground: {
      main: '#F2F2F2'
    }
  },
  typography: {
    ...globalStyles.typography,
    caption: {
      ...globalStyles.typography.caption,
      color: '#888'
    }
  },
  overrides: {
    MuiTypography: {
      h1: {
        color: '#333333',
      },
      h2: {
        color: '#333333',
      },
      h3: {
        color: '#333333',
      },
      h4: {
        color: '#333333',
      },
      h5: {
        color: '#888888',
      },
      h6: {
        color: '#9144DE',
      },
      caption: {
        color: '#888888',
      },
    }
  },
});