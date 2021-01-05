import React from "react"
import { ThemeProvider } from '@material-ui/core/styles';
import {lightTheme} from '../src/themes/lightTheme';
import {darkTheme} from '../src/themes/darkTheme';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={darkTheme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator