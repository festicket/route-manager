import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import closure from 'rollup-plugin-closure-compiler-js';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  plugins: [
    resolve({
      module: true,
      main: true,
      preferBuiltins: true,
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    closure(),
  ],
};
