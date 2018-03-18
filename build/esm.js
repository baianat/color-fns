const fs = require('fs');
const path = require('path');
const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const uglify = require('uglify-js');
const chalk = require('chalk');
const config = require('./config');
const { version } = require('../package.json');

const inputOptions = {
  input: config.paths.umd,
  plugins: [
    replace({ __VERSION__: version }),
    resolve(),
    babel()
  ]
};

const outputOptions = {
  format: 'es',
  banner: config.banner
};

async function build () {
  console.log(chalk.cyan('Generating esm build...'));

  // get the rollup bundle.
  const bundle = await rollup(inputOptions);

  // pass the desired output config
  const { code } = await bundle.generate(outputOptions);

  const filePath = path.join(config.paths.dist, 'color-fns.esm.js');

  fs.writeFileSync(filePath, code);

  const stats = config.utils.stats({ path: filePath, code });
  console.log(`${chalk.green('Output File:')} color-fns.esm.js ${stats}`);
}

build();
