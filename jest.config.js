// @flow
const { BRANCH_NAME } = process.env;

module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  moduleNameMapper: {
    '@festicket/react-ui-components': `<rootDir>/${
      BRANCH_NAME === 'master' ? 'dist' : 'src'
    }/index.js`,
  },
};
