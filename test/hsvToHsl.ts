import { hsvToHsl } from '../src/hsvToHsl';
import { HsvColor } from '../src/types';

const hsv = new HsvColor({
    hue: 200,
    sat: 100,
    val: 100
});

const hsl = {
    hue: 200,
    sat: 100,
    lum: 50,
    alpha: 1,
    model: 'hsl',
    invalid: false
}

test('converts hsv color to hsl color', () => {
  expect(hsvToHsl(hsv)).toMatchObject(hsl);
  expect(hsvToHsl(hsv.toString())).toMatchObject(hsl);
  expect(hsvToHsl(null)).toHaveProperty('invalid', true);
});
