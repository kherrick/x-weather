import { uglify } from 'rollup-plugin-uglify'
import { terser } from "rollup-plugin-terser";

import babel from 'rollup-plugin-babel'
import glob from 'glob'
import nodeResolve from 'rollup-plugin-node-resolve'

const input = glob.sync(`${__dirname}/../src/**/*.js`)

export default [
  // ES module version, for modern browsers
  {
    input,
    output: {
      dir: 'dist/module',
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
              'targets': "last 1 major versions",
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
  },
  // SystemJS version, for older browsers
  {
    input,
    output: {
      dir: 'dist/nomodule',
      format: 'system',
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
              'targets': "last 1 major versions",
              'modules': 'systemjs'
            }
          ]
        ],
        'plugins': [
          'external-helpers',
          'transform-custom-element-classes',
          'transform-es2015-classes'
        ]
      }),
      (process.env.NODE_ENV == 'production' && uglify())
    ],
    experimentalCodeSplitting: true,
    experimentalDynamicImport: true
  }
]
