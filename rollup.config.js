// @flow
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';

const globals = {
  lodash: 'lodash',
};

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    globals,
  },
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
    }),
    // If you uncomment this plugin, the build won't work.
    commonjs({}),
  ],
  external: ['@festicket/react-ui-components'],
};
