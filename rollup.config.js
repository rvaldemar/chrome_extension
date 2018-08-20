// Rollup plugins
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import quillsvg from 'rollup-plugin-quillsvg';

export default {
  entry: 'script.js',
  dest: 'build/extension.min.js',
  format: 'iife',
  plugins: [
    json(),
    quillsvg(),
    replace({
      'process.env.NODE_ENV': '"production"',
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true,
      preferBuiltins: false,
      main: true,
      browser: true
    }),
    commonjs()
  ],
  moduleName: '_hokojs'
};
