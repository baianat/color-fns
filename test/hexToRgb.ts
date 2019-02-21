import { hexToRgb } from '../src/hexToRgb';

const hex = {
  red: 'a1',
  green: '16',
  blue: '12'
};

const rgb = {
  red: 161,
  green: 22,
  blue: 18,
  alpha: 1
}

test('converts hex color to rgb color', () => {
  expect(hexToRgb(hex)).toMatchObject(rgb);
  expect(hexToRgb('#a11612')).toMatchObject(rgb);
  expect(hexToRgb(null)).toBeNull();
});
