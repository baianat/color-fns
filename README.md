<p align="center">
  <img width="200" src="https://github.com/baianat/color-fns/blob/master/logo.svg">
</p>

# 🎨 Color-fns 🎨

[![Build Status](https://travis-ci.org/baianat/color-fns.svg?branch=master)](https://travis-ci.org/baianat/color-fns)
[![codecov](https://codecov.io/gh/baianat/color-fns/branch/master/graph/badge.svg)](https://codecov.io/gh/baianat/color-fns)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a4d7bc3726514688b7186cce0852ebc4)](https://www.codacy.com/app/logaretm1/color-fns?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=baianat/color-fns&amp;utm_campaign=Badge_Grade)

Modern and Modular JavaScript color utility library.

## Features

- Written in TypeScript.
- Lightweight.
- Modular with Tree-shaking support.
- Multi-Color Model Support.
- CSS compatiable output.

## Installation

```bash
# yarn
yarn add color-fns

# npm
npm i color-fns
```

OR

```html
<script src="https://unpkg.com/color-fns"></script>
```

### Usage

```js
// ES2015 (ES6)
import { toRgb } from 'color-fns';

console.log(toRgb('#fff'));


// CommonJS
const { toRgb } = require('color-fns');
console.log(toRgb('#fff'));

// UMD (Script Tag)
console.log(ColorFns.toRgb('#fff'));
```

### Available Functions

#### Parsing

- parseCmyk
- parseHex
- parseHsl
- parseHsv
- parseRgb

#### Conversion

- cmykToRgb
- hexToRgb
- hslToRgb
- hsvToRgb
- rgbToCmyk
- rgbToHex
- rgbToHsl
- rgbToHsv
- toCmyk
- toHex
- toHsl
- toHsv
- toRgb

#### Operations

- mix

#### Format and Display

- expandHexShorthand
- formatCmyk
- formatHex
- formatHsl
- formatHsv
- formatRgb

#### Validation

- isValidCmyk
- isValidHex
- isValidHsl
- isValidHsv
- isValidRgb

#### Querying

- whichModel
- constrastInfo

### Contribution

Contributions are welcomed, however make sure you read the [contribution guide](.github/CONTRIBUTING.md) and the [code of conduct](.github/CONDUCT.md) before making any pull requests.

### License

MIT
