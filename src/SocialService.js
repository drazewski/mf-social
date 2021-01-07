import React from 'react';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import CombinedContextProvider from './context';
import PeoplePage from './components/People/pages/PeoplePage';
import { CssBaseline } from '@material-ui/core';

// We want to have prefixed class names
const generateClassName = createGenerateClassName({
  productionPrefix: 'mfSocial',
  seed: 'mfSocial'
});

const SocialService = () => {
  return (
    <CombinedContextProvider>
      <StylesProvider generateClassName={generateClassName}>
        <CssBaseline />
        <PeoplePage />
      </StylesProvider>
    </CombinedContextProvider>
  );
};

export default SocialService;
