
import ThemeDecorator from './themeDecorator';
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFF',
      },
      {
        name: 'light',
        value: '#EDEDED',
      },
      {
        name: 'dark',
        value: '#2A2A2A',
      },
    ],
  },
}

addDecorator(ThemeDecorator);
