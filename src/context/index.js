import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { eventsToListen } from 'src/utils/events';
import useWindowEventListener from 'src/hooks/useWindowEventListener';
import { getThemeByName } from 'src/themes/themeSelector';

const CombinedContextProvider = ({ children }) => {
  const [activeThemeName, setActiveThemeName] = useState();
  const activeTheme = getThemeByName(activeThemeName);

  const handleThemeChanged = e => setActiveThemeName(e.detail);

  useWindowEventListener(eventsToListen.HOST_THEME_CHANGED, handleThemeChanged);

  return (
    <ThemeProvider theme={activeTheme}>
      {children}
    </ThemeProvider>
  );
};

export default CombinedContextProvider;
