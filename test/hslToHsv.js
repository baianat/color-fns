import hslToHsv from '../src/hslToHsv';
import { HslColor } from '../src/types';

const hsl = new HslColor({
  hue: 200,
  sat: 100,
  lum: 50
});

const hsv = {
  invalid: false,
  hue: 200,
  sat: 100,
  val: 100,
  alpha: 1,
  model: 'hsv'
}

test('converts hsl color to hex color', () => {
  expect(hslToHsv(hsl)).toMatchObject(hsv);
  expect(hslToHsv(hsl.toString())).toMatchObject(hsv);
  expect(hslToHsv()).toHaveProperty('invalid', true);
});
