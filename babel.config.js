module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    test: {
      plugins: [
        [
          'babel-plugin-styled-components',
          { ssr: true, displayName: false, namespace: 'sc' },
        ],
      ],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        alias: {
          '@atoms/(.*)$': './src/components/atoms/\\1',
          '@molecules/(.*)$': './src/components/molecules/\\1',
          '@organisms/(.*)$': './src/components/organisms/\\1',
          '@helpers/(.*)$': './src/helpers/\\1',
          '@styles/(.*)$': './src/styles/\\1',
          '@type/(.*)$': './src/type/\\1',
        },
      },
    ],
  ],
};
