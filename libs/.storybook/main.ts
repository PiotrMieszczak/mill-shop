import { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/lib/design-system/stories/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  implementation: require('sass'),
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (webpackConfig) => {
    if (webpackConfig.module && webpackConfig.module.rules) {
      webpackConfig.module.rules = webpackConfig.module.rules.filter(rule => {
        if (typeof rule !== 'string' && rule && 'type' in rule && rule.test) {
          if (rule.type === 'javascript/auto' && rule.test.toString() === /\.m?js$/.toString()) {
            return false;
          }
        }
        return true;
      });
    }
    return webpackConfig;
  },
};

export default config;
