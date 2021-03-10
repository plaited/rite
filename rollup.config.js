import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'assert.js',
  output: {
    file: 'dist/assert.js',
    format: 'esm',
  },
  plugins: [commonjs(), resolve()],
}
