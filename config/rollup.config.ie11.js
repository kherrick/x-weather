import { uglify } from 'rollup-plugin-uglify'

import babel from 'rollup-plugin-babel'
import glob from 'glob'
import nodeResolve from 'rollup-plugin-node-resolve'

const input = glob.sync(`${__dirname}/../src/**/*.js`)

export default [
  {
    input,
    output: {
      dir: 'dist/nomodule',
      format: 'system',
      sourcemap: process.env.NODE_ENV !== 'production'
    },
    plugins: [
      // nodeResolve({ jsnext: true, module: true }),
      nodeResolve({ jsnext: true }),
      babel({
        'exclude': 'node_modules/**',
        'presets': [
          [
            'env',
            {
              'targets': {
                'ie': 11
              },
              'modules': false
            }
          ]
        ],
        'plugins': [
          'external-helpers'
        ]
      }),
      (process.env.NODE_ENV == 'production' && uglify())
    ],
    experimentalCodeSplitting: true,
    experimentalDynamicImport: true
  }
]
