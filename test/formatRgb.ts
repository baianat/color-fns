import { formatRgb } from '../src/formatRgb';

test('formats RGB colors to readable strings', () => {
  expect(formatRgb(null)).toBe('Invalid Color');
  expect(formatRgb({
    red: 255,
    green: 30,
    blue: 100
  })).toBe('rgb(255,30,100)');

  expect(formatRgb({
    red: 255,
    green: 30,
    blue: 100,
    alpha: 0.5
  })).toBe('rgba(255,30,100,0.5)');
});
