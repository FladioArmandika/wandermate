module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@app/api': './src/api',
          '@app/assets/icons': './src/assets/icons/index.ts',
          '@app/assets/images': [
            './src/assets/images',
            './src/assets/images/index.ts',
          ],
          '@app/components/base': ['./src/components/base/index.ts'],
          '@app/components': ['./src/components', './src/components/index.ts'],
          '@app/i18n': './src/i18n',
          '@app/hooks': ['./src/hooks', './src/hooks/index.ts'],
          '@app/themes': ['./src/themes', './src/themes/index.ts'],
          '@app/screens': ['./src/screens', './src/screens/index.ts'],
          '@app/routes': ['./src/routes', './src/routes/index.ts'],
          '@app/store': './src/store',
          '@app/providers': ['./src/providers', './src/providers/index.ts'],
          '@app/state': './src/state',
          '@app/types': ['./src/types', './src/types/index.ts'],
          '@app/utils': ['./src/utils', './src/utils/index.ts'],
          '@app/storybook': './storybook',
          '@types': './@types',
        },
      },
    ],
  ],
};
