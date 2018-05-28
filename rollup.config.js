import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/web-components-starter-container.js',
    format: 'iife',
    name: 'WebComponentsStarter',
    sourcemap: process.env.NODE_ENV !== 'production'
  },
  plugins: [
    nodeResolve({ jsnext: true }),
    babel({ exclude: 'node_modules/**' }),
    (process.env.NODE_ENV == 'production' && uglify())
  ]
}
