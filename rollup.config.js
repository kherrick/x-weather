import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

import glob from 'glob'
import path from 'path'

const isProduction = () => process.env.NODE_ENV === 'production'

export default [
  {
    output: {
      dir: path.join('dist', 'esm'),
      format: 'esm'
    },
    input: [...glob.sync('./src/**/*.js')],
    plugins: [
      replace({
        'process.env.NODE_ENV': isProduction() ? JSON.stringify('production') : JSON.stringify('development')
      }),
      resolve(),
      babel(),
      isProduction() ? terser() : undefined
    ]
  },
  {
    output: {
      dir: path.join('dist', 'umd'),
      format: 'umd',
      name: 'x-weather'
    },
    input: [path.join('src/module.js')],
    plugins: [
      replace({
        'process.env.NODE_ENV': isProduction() ? JSON.stringify('production') : JSON.stringify('development')
      }),
      resolve(),
      babel(),
      isProduction() ? terser() : undefined
    ]
  }
]
