(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.colorFns = factory());
}(this, (function () { 'use strict';

function getColorModel(color) {
  if (color.slice(0, 1) === '#' && (color.length === 4 || color.length === 7)) {
    return 'hex';
  }
  if (color.slice(0, 3).toUpperCase() === 'RGB') {
    return 'rgb';
  }
  if (color.slice(0, 3).toUpperCase() === 'HSL') {
    return 'hsl';
  }
  return false;
}

function isAColor(color) {
  return !!getColorModel(color);
}

function hexNumToDec(hexNum) {
  if (isNaN(parseInt(hexNum, 16))) {
    return 0;
  }
  return parseInt(hexNum, 16);
}

function decNumToHex(decNum) {
  decNum = Number(decNum);
  if (isNaN(decNum)) {
    return '00';
  }
  return ('0' + decNum.toString(16)).slice(-2);
}

function getRgbValues(rgb) {
  var match = rgb.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
  if (match && match.length >= 4) {
    return match;
  }
  console.warn('"' + rgb + '" is not valid rgb color');
  return '';
}

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

function rgbToHex(rgb, details) {
  var match = getRgbValues(rgb);
  if (!match) return;

  var _match = slicedToArray(match, 4),
      red = _match[1],
      green = _match[2],
      blue = _match[3];

  var _ref = [decNumToHex(red), decNumToHex(green), decNumToHex(blue)],
      rr = _ref[0],
      gg = _ref[1],
      bb = _ref[2];

  var hex = '#' + rr + gg + bb;

  if (details) {
    return [hex, rr, gg, bb];
  }
  return hex;
}

function rgb2Hsl(rgb, details) {
  var match = getRgbValues(rgb);
  if (!match) return;

  // Convert the RGB values to the range 0-1

  var _match$map = match.map(function (val) {
    return val / 255;
  }),
      _match$map2 = slicedToArray(_match$map, 4),
      red = _match$map2[1],
      green = _match$map2[2],
      blue = _match$map2[3];

  var hue = 0,
      sat = 0,
      lum = 0;

  // Find the minimum and maximum values of R, G and B.

  var min = Math.min(red, green, blue);
  var max = Math.max(red, green, blue);

  // Calculate the lightness value
  lum = (min + max) / 2;

  // Calculate the saturation.
  if (min !== max) {
    sat = lum > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  }

  // calculate the hue
  if (red >= max && min !== max) {
    hue = 60 * ((green - blue) / (max - min));
  }
  if (green >= max && min !== max) {
    hue = 60 * (2.0 + (blue - red) / (max - min));
  }
  if (blue >= max && min !== max) {
    hue = 60 * (4.0 + (red - green) / (max - min));
  }

  // normalize values
  hue = hue < 0 ? Math.floor(hue + 360) : Math.floor(hue);
  sat = Math.floor(sat * 100);
  lum = Math.floor(lum * 100);

  if (details) {
    return ['hsl(' + hue + ', ' + sat + '%, ' + lum + '%)', hue, sat, lum];
  }
  return 'hsl(' + hue + ', ' + sat + '%, ' + lum + '%)';
}

function expandHexShorthand(hex) {
  if (hex.length === 4) {
    hex = hex.replace(/^#([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
      return "#" + r + r + g + g + b + b;
    });
  }
  return hex;
}

function getHexValues(hex) {
  hex = expandHexShorthand(hex);
  var match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i);
  if (match && match.length >= 4) {
    return match;
  }
  console.warn('"' + hex + '" is not valid hex color');
  return '';
}

function hexToRgb(hex, details) {
  var match = getHexValues(hex);
  if (!match) return;

  var _match = slicedToArray(match, 4),
      rr = _match[1],
      gg = _match[2],
      bb = _match[3];

  var _ref = [hexNumToDec(rr), hexNumToDec(gg), hexNumToDec(bb)],
      red = _ref[0],
      green = _ref[1],
      blue = _ref[2];

  var rgb = hex && hex.length === 4 ? 'rgb(' + red + ', ' + green + ', ' + blue + ')' : '';

  if (details) {
    return [rgb, red, green, blue];
  }
  return rgb;
}

function normalizeDecNum(value) {
  return Math.min(Math.max(parseInt(value), 0), 255);
}

function getHslValues(hsl) {
  var match = hsl.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i);
  if (match && match.length >= 4) {
    return match;
  }
  console.warn('"' + hsl + '" is not valid hsl color');
  return '';
}

function hslToRgb(hsl, details) {
  var match = getHslValues(hsl);
  if (!match) return;

  var hue = match[1] / 360,
      sat = match[2] / 100,
      lgh = match[3] / 100;
  var red = 0,
      green = 0,
      blue = 0;


  if (sat === 0) {
    red = green = blue = normalizeDecNum(lgh * 255);
  }
  if (sat !== 0) {
    var temp1 = lgh >= 50 ? lgh + sat - lgh * sat : lgh * (1 + sat);
    var temp2 = 2 * lgh - temp1;

    var testHue = function testHue(test) {
      if (test < 0) test += 1;
      if (test > 1) test -= 1;
      if (test < 1 / 6) return temp2 + (temp1 - temp2) * 6 * test;
      if (test < 1 / 2) return temp1;
      if (test < 2 / 3) return temp2 + (temp1 - temp2) * (2 / 3 - test) * 6;
      return temp2;
    };

    red = normalizeDecNum(255 * testHue(hue + 1 / 3));
    green = normalizeDecNum(255 * testHue(hue));
    blue = normalizeDecNum(255 * testHue(hue - 1 / 3));
  }

  var rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  if (details) {
    return [rgb, red, green, blue];
  }
  return rgb;
}

function hexToHsl(hex, details) {
  var _rgbToHsl = rgb2Hsl(hexToRgb(hex), true),
      _rgbToHsl2 = slicedToArray(_rgbToHsl, 4),
      Hsl = _rgbToHsl2[0],
      Hue = _rgbToHsl2[1],
      Sat = _rgbToHsl2[2],
      Lgh = _rgbToHsl2[3];

  if (details) {
    return [Hsl, Hue, Sat, Lgh];
  }
  return Hsl;
}

function hslToHex(hsl, details) {
  var _rgbToHex = rgbToHex(hslToRgb(hsl), true),
      _rgbToHex2 = slicedToArray(_rgbToHex, 4),
      Hex = _rgbToHex2[0],
      Red = _rgbToHex2[1],
      Green = _rgbToHex2[2],
      Blue = _rgbToHex2[3];

  if (details) {
    return [Hex, Red, Green, Blue];
  }
  return Hex;
}

function toRgb(color, details) {
  var model = getColorModel(color);

  if (model === 'hex') {
    return hexToRgb.apply(undefined, arguments);
  }
  if (model === 'hsl') {
    return hslToRgb.apply(undefined, arguments);
  }
  if (model === 'rgb' && details) {
    return getRgbValues(color).slice(0, 4);
  }
  if (model === 'rgb') {
    return getRgbValues(color)[0];
  }
  return null;
}

function toHsl(color, details) {
  var model = getColorModel(color);

  if (model === 'hex') {
    return hexToHsl.apply(undefined, arguments);
  }
  if (model === 'rgb') {
    return rgb2Hsl.apply(undefined, arguments);
  }
  if (model === 'hsl' && details) {
    return getHslValues(color).slice(0, 4);
  }
  if (model === 'hsl') {
    return getHslValues(color)[0];
  }
  return null;
}

function toHex(color, details) {
  var model = getColorModel(color);

  if (model === 'rgb') {
    return rgbToHex.apply(undefined, arguments);
  }
  if (model === 'hsl') {
    return hslToHex.apply(undefined, arguments);
  }
  if (model === 'hex' && details) {
    return getHexValues(color).slice(0, 4);
  }
  if (model === 'hex') {
    return getHexValues(color)[0];
  }
  return null;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
  return "rgb(" + getRandomInt(0, 255) + ", " + getRandomInt(0, 255) + ", " + getRandomInt(0, 255) + ")";
}

var _index = {
  getColorModel: getColorModel,
  isAColor: isAColor,
  hexNumToDec: hexNumToDec,
  decNumToHex: decNumToHex,
  rgbToHex: rgbToHex,
  rgbToHsl: rgb2Hsl,
  hexToRgb: hexToRgb,
  hslToRgb: hslToRgb,
  hexToHsl: hexToHsl,
  hslToHex: hslToHex,
  toRgb: toRgb,
  toHex: toHex,
  toHsl: toHsl,
  getRgbValues: getRgbValues,
  getHexValues: getHexValues,
  getHslValues: getHslValues,
  getRandomColor: getRandomColor,
  normalizeDecNum: normalizeDecNum,
  expandHexShorthand: expandHexShorthand,
  version: '0.0.1'
};

return _index;

})));
