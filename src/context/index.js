import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import dispatchEvent, { eventsToListen, eventsToDispatch } from 'src/utils/events';
import useWindowEventListener from 'src/hooks/useWindowEventListener';
import { getThemeByName } from 'src/themes/themeSelector';

const CombinedContextProvider = ({ children }) => {
  const [activeThemeName, setActiveThemeName] = useState();
  const activeTheme = getThemeByName(activeThemeName || 'lightTheme');

  const handleThemeChanged = e => {
    setActiveThemeName(e.detail);
  }

  useWindowEventListener(eventsToListen.HOST_THEME_CHANGED, handleThemeChanged);

  const checkCurrentTheme = () => {
    console.log('event:', `${eventsToDispatch.HOST_THEME_CHECK}:` )
    dispatchEvent(eventsToDispatch.HOST_THEME_CHECK);
  }

  useEffect(() => {
    checkCurrentTheme();
  }, []);


  return (
    <ThemeProvider theme={activeTheme}>
      {children}
    </ThemeProvider>
  );
};

export default CombinedContextProvider;
