import { terser } from "rollup-plugin-terser";

import babel from 'rollup-plugin-babel'
import glob from 'glob'
import nodeResolve from 'rollup-plugin-node-resolve'

const input = glob.sync(`${__dirname}/../src/**/*.js`)

export default [
  {
    input,
    output: {
      dir: 'dist/esm',
      format: 'es',
      sourcemap: process.env.NODE_ENV !== 'production'
    },
    plugins: [
      nodeResolve({ jsnext: true }),
      babel({
        'exclude': 'node_modules/**',
        'presets': [
          [
            'env',
            {
              'targets': "> 5%",
              'modules': false
            }
          ]
        ],
        'plugins': [
          'external-helpers',
          'transform-custom-element-classes',
          'transform-es2015-classes'
        ]
      }),
      (process.env.NODE_ENV == 'production' && terser())
    ],
    experimentalCodeSplitting: true,
    experimentalDynamicImport: true
  }
]
