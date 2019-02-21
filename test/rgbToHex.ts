import { rgbToHex } from '../src/rgbToHex';

const rgb = {
  red: 13,
  green: 200,
  blue: 230,
  alpha: 0.5
};

const hex = {
  red: '0d',
  green: 'c8',
  blue: 'e6',
  alpha: '7f'
}

test('converts rgb color to hex color', () => {
  expect(rgbToHex(rgb)).toMatchObject(hex);
  expect(rgbToHex('rgb(13, 200, 230, 0.5)')).toMatchObject(hex);
  expect(rgbToHex(null)).toBeNull();
});
