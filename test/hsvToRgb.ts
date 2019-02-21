import { hsvToRgb } from '../src/hsvToRgb';

const hsv = {
    hue: 188,
    sat: 94,
    val: 90
};

const rgb = {
  red: 13, // should be 14
  green: 200, // should be 201
  blue: 229, // should be 230
}

test('converts hsv color to rgb color', () => {
  expect(hsvToRgb(hsv)).toMatchObject(rgb);
  expect(hsvToRgb('hsv(188, 94%, 90%)')).toMatchObject(rgb);
  expect(hsvToRgb(null)).toBeNull();
});
