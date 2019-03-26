import { formatHsv } from '../src/formatHsv';

test('formats HSV colors to readable strings', () => {
  expect(formatHsv(null)).toBe('Invalid Color');
  expect(formatHsv({
    hue: 300,
    sat: 50,
    val: 20
  })).toBe('hsv(300,50%,20%)');

  expect(formatHsv({
    hue: 300,
    sat: 50,
    val: 20,
    alpha: 0.5
  })).toBe('hsva(300,50%,20%,0.5)');
});
