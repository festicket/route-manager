import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  plugins: [
    peerDepsExternal(),
    commonjs({
      include: [
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**',
        'node_modules/prop-types/**',
        'node_modules/create-react-class/**',
        'node_modules/@storybook/**',
      ],
    }),
    resolve({
      module: true,
      main: true,
      preferBuiltins: true,
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
