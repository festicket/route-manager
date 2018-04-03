// @flow
const { SEMAPHORE_SERVER_NAME } = process.env;

module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  moduleNameMapper: {
    '@festicket/route-manager': `<rootDir>/${
      SEMAPHORE_SERVER_NAME ? 'dist' : 'src'
    }/index.js`,
  },
  // while the build is simply transpiling with Babel to dist, we need to ignore those test files
  testPathIgnorePatterns: ['<rootDir>/dist/'],
};
