const { IS_CI } = process.env;

module.exports = {
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  moduleNameMapper: {
    '@festicket/react-ui-components': `<rootDir>/${IS_CI ? 'dist' : 'src'}/index.js`,
  },
};
