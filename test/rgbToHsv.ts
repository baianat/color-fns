import { rgbToHsv } from '../src/rgbToHsv';

const rgb = {
  red: 13,
  green: 200,
  blue: 230
};

const hsv = {
  hue: 188,
  sat: 94,
  val: 90
};

test('converts rgb color to hsv color', () => {
  expect(rgbToHsv(rgb)).toMatchObject(hsv);
  expect(rgbToHsv('rgb(13, 200, 230)')).toMatchObject(hsv);

  // test edge case when green is max
  expect(rgbToHsv({ ...rgb, green: 255 })).toMatchObject({
    hue: 173,
    sat: 94, // should be 94.9
    val: 100
  });

  expect(rgbToHsv(null)).toBeNull();
});
