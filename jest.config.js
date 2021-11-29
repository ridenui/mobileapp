module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    'jest-styled-components/native',
  ],
  moduleNameMapper: {
    '@dev/(.*)': '<rootDir>/src/.dev/$1',
    '@atoms/(.*)': '<rootDir>/src/components/atoms/$1',
    '@enums/(.*)': '<rootDir>/src/enums/$1',
    '@helpers/(.*)': '<rootDir>/src/helpers/$1',
    '@molecules/(.*)': '<rootDir>/src/components/molecules/$1',
    '@organisms/(.*)': '<rootDir>/src/components/organisms/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageReporters: ['html'],
  reporters: ['default'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
};
