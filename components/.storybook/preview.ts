import type { Preview } from '@storybook/react';

import '../src/lib/styles/reset.css';
import '../src/lib/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
