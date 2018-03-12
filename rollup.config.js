import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';

const path = require('path');
const version = require('./package.json').version;

export default {
  input: 'src/index.js',
  output: {
    file: path.join(__dirname, '/dist/color-fns.js'),
    format: 'umd',
    name: 'colorFns'
  },
  plugins: [
    resolve(),
    babel(),
    json(),
    replace({
      __VERSION__: version
    })
  ]
};
