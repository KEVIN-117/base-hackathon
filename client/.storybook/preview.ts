import type { Preview } from "@storybook/react";
// import '../app/ui/global.css';
const preview: Preview = {
  parameters: {
    nextjs: {
      router: {
        basePath: '/app/',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
