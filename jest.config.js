// @flow
const { SEMAPHORE_SERVER_NAME } = process.env;

module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  moduleNameMapper: {
    '@festicket/route-manager': `<rootDir>/${
      SEMAPHORE_SERVER_NAME ? 'dist' : 'src'
    }/index.js`,
  },
  // while the build is simply transpiling with Babel to dist, we need to ignore those test files
  testPathIgnorePatterns: ['<rootDir>/dist/'],
};
