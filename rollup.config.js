import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
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
  ],
  external: ['@festicket/react-ui-components'],
};
