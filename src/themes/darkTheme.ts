import { createMuiTheme } from '@material-ui/core';
import { globalStyles } from './globalStyles';

export const darkTheme = createMuiTheme({
  ...globalStyles,
  palette: {
    ...globalStyles.palette,
    type: 'dark',
    primary: {
      main: '#A363E3',
      contrastText:'#FFF',
      light: '#CDAEEA',
    },
    secondary : {
      main:'#4CAFC7',
      contrastText: '#FFF',
      light: '#4B4949',
    },
    accent: {
      main: '#D5BE15',
    },
    highlight: {
      main: '#9144DE',
    },
    paper: {
      main: '#292929',
    },
    reversedPaper: {
      main: '#FFF'
    },
    reversedText: {
      main: '#333'
    },
    header: {
      main: '#3C393E'
    },
    headerButtonsBg: {
      main: '#DDD'
    },
    mainContainerBg: {
      main: '#2A2A2A'
    },
    checkCircleIcon: {
      main: '#6FE36A'
    },
    helpIcon: {
      main: '#F2C221',
      light: '#FCF0C9',
    },
    urlPreviewBackground: {
      main: '#3A3B3C'
    },
    urlPreviewBorder: {
      main: 'transparent'
    },
    postItemBorder: {
      main: 'transparent'
    },
    advancedSearchSubjectBackground: {
      main: '#424242'
    }
  },
  typography: {
    ...globalStyles.typography,
    caption: {
      ...globalStyles.typography.caption,
      color: '#FFF'
    }
  },
  overrides: {
    MuiTypography: {
      h1: {    
        color: 'white',
      },
      h2: {
        color: 'white',
      },
      h3: {
        color: 'white',
      },
      h4: {
        color: 'white',
      },
      h5: {
        color: '#bbbbbb',
      },
      h6: {
        color: '#CDAEEA',
      },
      caption: {
        color: 'white',
      },
      body2: {
        color: 'white',
      },
      subtitle2: {
        color: 'white'
      }
    },
  },
});
