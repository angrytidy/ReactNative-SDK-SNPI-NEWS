module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          common: './src/common',
          styles: './src/common/styles',
          colors: './src/common/colors',
          components: './src/common/components',
          config: './src/config',
          actions: './src/actions',
          actionsTypes: './src/actionsTypes',
          api: './src/api',
          contextProviders: './src/contextProviders',
          hooks: './src/hooks',
          lib: './src/lib',
          locales: './src/locales',
          modules: './src/modules',
          reducers: './src/reducers',
          router: './src/router',
          scripts: './src/scripts',
          services: './src/services',
          store: './src/store',
          utils: './src/utils',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    ],
  ],
};
