import React from 'react';
import Grid from '@material-ui/core/Grid';
import Layout from './components/Layout';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import CombinedContextProvider from './context';
import TextComponent from './components/TextComponent';

// We want to have prefixed class names
const generateClassName = createGenerateClassName({
  productionPrefix: 'mfSocial',
  seed: 'mfSocial'
});

const SocialService = () => {
  return (
    <CombinedContextProvider>
      <StylesProvider generateClassName={generateClassName}>
        <Layout>
          <Grid item xs={12}>
            <TextComponent />
          </Grid>
        </Layout>
      </StylesProvider>
    </CombinedContextProvider>
  );
};

export default SocialService;
