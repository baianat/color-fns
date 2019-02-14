const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { rollup } = require('rollup');
const mkdirpNode = require('mkdirp');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const chalk = require('chalk');
const config = require('./config');
const { version } = require('../package.json');

const mkdirp = promisify(mkdirpNode);

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const inputOptions = {
  input: config.paths.esm,
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
  format: 'es',
  banner: config.banner
};

async function build () {
  await mkdirp(config.paths.dist);
  console.log(chalk.cyan('Generating esm build...'));

  // get the rollup bundle.
  const bundle = await rollup(inputOptions);

  // pass the desired output config
  const { output } = await bundle.generate(outputOptions);

  const filePath = path.join(config.paths.dist, 'color-fns.esm.js');

  fs.writeFileSync(filePath, output[0].code);

  const stats = config.utils.stats({ path: filePath, code: output[0].code });
  console.log(`${chalk.green('Output File:')} color-fns.esm.js ${stats}`);
}

build();
