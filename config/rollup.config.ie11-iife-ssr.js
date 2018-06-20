import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const banner = `
  var Express = require('express');
  var render = require('@skatejs/ssr');

  require('@skatejs/ssr/register');
`

export default [
  {
    input: 'src/server.js',
    output: {
      banner,
      file: 'dist/server.js',
      format: 'iife',
      name: 'Main',
      sourcemap: process.env.NODE_ENV !== 'production'
    },
    plugins: [
      resolve({
        jsnext: true,
        modulesOnly: true,
      }),
      babel({
        'presets': [
          [
            'stage-2',
          ]
        ],
        'plugins': [
          'external-helpers'
        ]
      }),
      commonjs(),
      (process.env.NODE_ENV == 'production' && uglify())
    ]
  }
]
