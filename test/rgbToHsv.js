import { rgbToHsv } from '@/rgbToHsv';
import { RgbColor } from '@/types';

const rgb = new RgbColor({
  red: 13,
  green: 200,
  blue: 230,
});

const hsv = {
  invalid: false,
  hue: 188,
  sat: 94,
  val: 90
}

test('converts rgb color to hsv color', () => {

  expect(rgbToHsv(rgb)).toMatchObject(hsv);
  expect(rgbToHsv(rgb.toString())).toMatchObject(hsv);

  // test edge case when green is max
  expect(rgbToHsv({ ...rgb, green: 255 })).toMatchObject({
    invalid: false,
    hue: 173,
    sat: 94, // should be 94.9
    val: 100
  });

  expect(rgbToHsv()).toHaveProperty('invalid', true);
});
