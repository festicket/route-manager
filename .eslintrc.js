module.exports = {
  parser: 'babel-eslint',
  extends: '@festicket',
  plugins: ['babel', 'react', 'jsx-a11y', 'import', 'jest'],
  env: {
    'jest/globals': true,
  },
};
