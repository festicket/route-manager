// @flow

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const globals = {
  lodash: 'lodash',
};

export default {
  input: 'src/index.js',
  output: [
    // We bundle an es version of the build here so that webpack can consume it
    // the cjs build above asumes anything in peerDependencies is a global variable.
    // It will produce this for example: react2 = React['default']. In a webpack environement
    // (global || window).React is undefined. In es land the build prouces this:
    // import React form 'react'; which webpack can consume with ease
    {
      file: pkg.main,
      format: 'es',
      globals,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      module: true,
      main: true,
      preferBuiltins: true,
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    // If you uncomment this plugin, the build won't work.
    commonjs({}),
  ],
  external: ['@festicket/react-ui-components'],
};
