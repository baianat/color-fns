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

function decNumFromHex(hexNum) {
  if (isNaN(parseInt(hexNum, 16))) {
    return 0;
  }
  return parseInt(hexNum, 16);
}

function hexNumFromDec(decNum) {
  if (isNaN(decNum)) {
    return '00';
  }
  return ('0' + decNum.toString(16)).slice(-2);
}

function rgb2Hex(rgb, output) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  var red = hexNumFromDec(rgb[1]);
  var green = hexNumFromDec(rgb[2]);
  var blue = hexNumFromDec(rgb[3]);
  var hex = rgb && rgb.length === 4 ? '#' + red + green + blue : '';

  if (output === 'details') {
    return [hex, red, green, blue];
  }
  return hex;
}

function rgb2Hsl(rgb, output) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  if (!rgb || rgb.length !== 4) return;

  // Convert the RGB values to the range 0-1
  var red = rgb[1] / 255;
  var green = rgb[2] / 255;
  var blue = rgb[3] / 255;
  var Hue = 0;
  var Sat = 0;
  var Lum = 0;

  // Find the minimum and maximum values of R, G and B.
  var min = Math.min(red, green, blue);
  var max = Math.max(red, green, blue);

  // Calculate the Luminance value
  Lum = (min + max) / 2;

  // Calculate the Saturation.
  if (min !== max) {
    Sat = Lum > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
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
  Hue = Hue < 0 ? parseInt(Hue + 360) : parseInt(Hue);
  Sat = parseInt(Sat * 100);
  Lum = parseInt(Lum * 100);

  if (output === 'details') {
    return ['hsl(' + Hue + ', ' + Sat + '%, ' + Lum + '%)', Hue, Sat, Lum];
  }
  return 'hsl(' + Hue + ', ' + Sat + '%, ' + Lum + '%)';
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
  return "rgb(" + getRandomInt(0, 255) + ", " + getRandomInt(0, 255) + ", " + getRandomInt(0, 255) + ")";
}

function normalizeDecNum(value) {
  return Math.min(Math.max(Number(value), 255), 0);
}

var _index = {
  getColorModel: getColorModel,
  isAColor: isAColor,
  decNumFromHex: decNumFromHex,
  hexNumFromDec: hexNumFromDec,
  rgb2Hex: rgb2Hex,
  rgb2Hsl: rgb2Hsl,
  getRandomColor: getRandomColor,
  normalizeDecNum: normalizeDecNum,
  version: '0.0.1'
};

return _index;

})));
