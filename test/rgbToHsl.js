import { rgbToHsl } from '@/rgbToHsl';
import { RgbColor } from '@/types';

const rgb = new RgbColor({
  red: 13,
  green: 200,
  blue: 230,
});

const hsl = {
  invalid: false,
  hue: 188,
  sat: 89, // should be 89.3
  lum: 47 // should be 47.6
}

test('converts rgb color to hsl color', () => {

  expect(rgbToHsl(rgb)).toMatchObject(hsl);
  expect(rgbToHsl(rgb.toString())).toMatchObject(hsl);

  // test edge case when green is max
  expect(rgbToHsl({ ...rgb, green: 255 })).toMatchObject({
    invalid: false,
    hue: 173,
    sat: 100,
    lum: 52
  });

  expect(rgbToHsl()).toHaveProperty('invalid', true);
});
