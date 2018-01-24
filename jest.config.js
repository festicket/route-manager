const { IS_CI } = process.env;

module.exports = {
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  moduleNameMapper: {
    '@festicket/sample-react-components-library': `<rootDir>/${IS_CI ? 'dist' : 'src'}/index.js`,
  },
};
