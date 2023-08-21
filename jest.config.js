/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  collectCoverage: false,
  coverageProvider: 'v8',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/specs/**/*.spec.*'],
  reporters: ['default', 'jest-allure'],
  testRunner: 'jest-jasmine2',
  setupFilesAfterEnv: [
    'jest-allure/dist/setup'
  ]
}
