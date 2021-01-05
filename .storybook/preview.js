
import ThemeDecorator from './themeDecorator';
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(ThemeDecorator);
