export default {
  collectCoverage: false,
  coverageProvider: 'v8',
  testMatch: ['**/specs/**/*.spec.*'],
  reporters: [
    'default',
    [
      'jest-html-reporters', {
        publicPath: './jest-html-report',
        filename: 'report.html'
      }
    ]
  ]
}
