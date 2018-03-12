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

var index = {
  getColorModel: getColorModel,
  version: '0.0.1'
};

return index;

})));
