const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const mkdirpNode = require('mkdirp');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const uglify = require('uglify-js');
const chalk = require('chalk');
const config = require('./config');
const { version } = require('../package.json');

const mkdirp = promisify(mkdirpNode);

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const inputOptions = {
  input: config.paths.umd,
  plugins: [
    replace({ __VERSION__: version }),
    resolve({
      extensions
    }),
    babel({
      extensions,
      exclude: 'node_modules/**'
    })
  ]
};

const outputOptions = {
  format: 'umd',
  name: 'ColorFns',
  banner: config.banner
};

async function build () {
  await mkdirp(config.paths.dist);
  console.log(chalk.cyan('Generating umd build...'));

  // get the rollup bundle.
  const bundle = await rollup(inputOptions);

  // pass the desired output config
  const { output: [{ code }] } = await bundle.generate(outputOptions);

  let filePath = path.join(config.paths.dist, 'color-fns.js');

  // write the un-minified code.
  fs.writeFileSync(filePath, code);
  let stats = config.utils.stats({ path: filePath, code });
  console.log(`${chalk.green('Output File:')} color-fns.js ${stats}`);

  filePath = path.join(config.paths.dist, 'color-fns.min.js');
  // write the minified code.
  fs.writeFileSync(filePath, uglify.minify(code, config.uglifyOptions).code);
  stats = config.utils.stats({ path: filePath, code });
  console.log(`${chalk.green('Output File:')} color-fns.min.js ${stats}`);
}

build();
