import React from "react"
import { ThemeProvider } from '@material-ui/core/styles';
import {lightTheme} from '../src/themes/lightTheme';
import {darkTheme} from '../src/themes/darkTheme';
import { StylesProvider } from "@material-ui/styles";

import { select } from "@storybook/addon-knobs";

const label = 'Choose Theme';
const options = { Light:lightTheme, Dark:darkTheme };
const defaultValue = lightTheme;

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={select(label, options, defaultValue)}><StylesProvider injectFirst>{storyFn()}</StylesProvider></ThemeProvider>
)

export default ThemeDecorator