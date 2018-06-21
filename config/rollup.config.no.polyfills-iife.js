import { uglify } from 'rollup-plugin-uglify'

import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/iife/main.js',
      format: 'iife',
      name: 'Main',
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
      (process.env.NODE_ENV == 'production' && uglify())
    ]
  }
]
