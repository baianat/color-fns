const path = require('path');
const fs = require('fs');
const filesize = require('filesize');
const gzipSize = require('gzip-size');

const { version } = require('../package.json');

module.exports = {
  banner:
  `/**
  * color-fns v${version}
  * (c) ${new Date().getFullYear()} Baianat
  * @license MIT
  */`,
  paths: {
    umd: path.join(__dirname, '../src/index.ts'),
    esm: path.join(__dirname, '../src/index.esm.ts'),
    dist: path.join(__dirname, '../dist')
  },
  uglifyOptions: {
    compress: true,
    mangle: true
  },
  utils: {
    stats ({ path, code }) {
      const { size } = fs.statSync(path);
      const gzipped = gzipSize.sync(code);

      return `| Size: ${filesize(size)} | Gzip: ${filesize(gzipped)}`;
    }
  }
};
