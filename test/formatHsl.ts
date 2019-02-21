import { formatHsl } from '../src/formatHsl';

test('formats HSL colors to readable strings', () => {
  expect(formatHsl(null)).toBe('Invalid Color');
  expect(formatHsl({
    hue: 300,
    sat: 50,
    lum: 20
  })).toBe('hsl(300,50%,20%)');

  expect(formatHsl({
    hue: 300,
    sat: 50,
    lum: 20,
    alpha: 0.5
  })).toBe('hsla(300,50%,20%,0.5)');
});
