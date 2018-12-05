import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy'
import resolve from 'rollup-plugin-node-resolve'
import autoExternal from 'rollup-plugin-auto-external'
import commonjs from 'rollup-plugin-commonjs'

module.exports = [
  {
    input: 'src/client/main.js',
    output: {
      file: 'dist/www/bundle.js',
      format: 'iife'
    },
    plugins: [
      resolve({
        jsnext: true,
        main: true
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**'
      }),
      copy({
        'assets/views': 'dist/views'
      })
    ]
  },
  {
    input: 'src/server.js',
    output: {
      file: 'dist/server.js',
      format: 'cjs'
    },
    plugins: [autoExternal(), resolve(), babel()]
  }
]
