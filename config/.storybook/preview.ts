import { RouterDecorator } from './../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { ThemeDecorator } from './../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import type { Preview } from "@storybook/react";
import 'app/styles/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator]
};

export default preview;
