(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.colorFns = factory());
}(this, (function () { 'use strict';

function getColorModel(color) {
  if (color.slice(0, 1) === '#' && (color.length === 4 || color.length === 7)) {
    return 'hex';
  }
  if (color.slice(0, 3).toUpperCase() !== 'RGB') {
    return 'rgb';
  }
  if (color.slice(0, 3).toUpperCase() !== 'HSL') {
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

function decNumbToHex(decNum) {
  decNum = Number(decNum);
  if (isNaN(decNum)) {
    return '00';
  }
  return ('0' + decNum.toString(16)).slice(-2);
}

function rgbToHex(rgb, details) {
  rgb = rgb.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*/i);
  var red = decNumbToHex(rgb[1]);
  var green = decNumbToHex(rgb[2]);
  var blue = decNumbToHex(rgb[3]);
  var hex = rgb && rgb.length === 4 ? '#' + red + green + blue : '';

  if (details) {
    return [hex, red, green, blue];
  }
  return hex;
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

function rgb2Hsl(rgb, details) {
  var _rgb$match = rgb.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i),
      _rgb$match2 = slicedToArray(_rgb$match, 4),
      red = _rgb$match2[1],
      green = _rgb$match2[2],
      blue = _rgb$match2[3];

  if (!red || !green || !blue) return;
  // Convert the RGB values to the range 0-1
  var _ref = [red / 255, green / 255, blue / 255];
  red = _ref[0];
  green = _ref[1];
  blue = _ref[2];

  var Hue = 0;
  var Sat = 0;
  var Lgh = 0;

  // Find the minimum and maximum values of R, G and B.
  var min = Math.min(red, green, blue);
  var max = Math.max(red, green, blue);

  // Calculate the lightness value
  Lgh = (min + max) / 2;

  // Calculate the Saturation.
  if (min !== max) {
    Sat = Lgh > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  }

  // calculate the Hue
  if (red >= max && min !== max) {
    Hue = 60 * ((green - blue) / (max - min));
  }
  if (green >= max && min !== max) {
    Hue = 60 * (2.0 + (blue - red) / (max - min));
  }
  if (blue >= max && min !== max) {
    Hue = 60 * (4.0 + (red - green) / (max - min));
  }

  // normalize values
  Hue = Hue < 0 ? Math.floor(Hue + 360) : Math.floor(Hue);
  Sat = Math.floor(Sat * 100);
  Lgh = Math.floor(Lgh * 100);

  if (details) {
    return ["hsl(" + Hue + ", " + Sat + "%, " + Lgh + "%)", Hue, Sat, Lgh];
  }
  return "hsl(" + Hue + ", " + Sat + "%, " + Lgh + "%)";
}

function expandHexShorthand(hex) {
  if (hex.length === 4) {
    hex = hex.replace(/^#([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
      return "#" + r + r + g + g + b + b;
    });
  }
  return hex;
}

function hexToRgb(hex, details) {
  hex = expandHexShorthand(hex);
  hex = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  var red = hexNumToDec(hex[1]);
  var green = hexNumToDec(hex[2]);
  var blue = hexNumToDec(hex[3]);
  var rgb = hex && hex.length === 4 ? 'rgb(' + red + ', ' + green + ', ' + blue + ')' : '';

  if (details) {
    return [rgb, red, green, blue];
  }

  return rgb;
}

function normalizeDecNum(value) {
  return Math.min(Math.max(parseInt(value), 0), 255);
}

function hslToRgb(hsl, details) {
  var _hsl$match = hsl.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%/i),
      _hsl$match2 = slicedToArray(_hsl$match, 4),
      hue = _hsl$match2[1],
      sat = _hsl$match2[2],
      lgh = _hsl$match2[3];

  if (!hue || !sat || !lgh) return;
  var _ref = [hue / 360, sat / 100, lgh / 100];
  hue = _ref[0];
  sat = _ref[1];
  lgh = _ref[2];

  var red = 0;
  var green = 0;
  var blue = 0;

  if (sat === 0) {
    red = green = blue = lgh * 255;
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

function hslToHex(hex, details) {
  var _rgbToHex = rgbToHex(hslToRgb(hex), true),
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
  decNumbToHex: decNumbToHex,
  rgbToHex: rgbToHex,
  rgbToHsl: rgb2Hsl,
  hexToRgb: hexToRgb,
  hslToRgb: hslToRgb,
  hexToHsl: hexToHsl,
  hslToHex: hslToHex,
  getRandomColor: getRandomColor,
  normalizeDecNum: normalizeDecNum,
  expandHexShorthand: expandHexShorthand,
  version: '0.0.1'
};

return _index;

})));
