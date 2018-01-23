const { IS_CI } = process.env;

module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  moduleNameMapper: {
    '@festicket/sample-react-components-library': `<rootDir>/${IS_CI ? 'dist' : 'src'}/index.js`,
  },
};
