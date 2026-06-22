/** @type {import('@storybook/web-components-vite').StorybookConfig} */
const config = {
  stories: ['../src/**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
};

export default config;
