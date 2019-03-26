import { rgbToHsl } from '../src/rgbToHsl';

const rgb = {
  red: 13,
  green: 200,
  blue: 230,
};

const hsl = {
  hue: 188,
  sat: 89, // should be 89.3
  lum: 47 // should be 47.6
}

test('converts rgb color to hsl color', () => {

  expect(rgbToHsl(rgb)).toMatchObject(hsl);
  expect(rgbToHsl('rgb(13, 200, 230)')).toMatchObject(hsl);

  // test edge case when green is max
  expect(rgbToHsl({ ...rgb, green: 255 })).toMatchObject({
    hue: 173,
    sat: 100,
    lum: 52
  });

  expect(rgbToHsl(null)).toBeNull();
});
