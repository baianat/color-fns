import toRgb from '../src/toRgb';

test('converts from HEX to RGB', () => {
  expect(toRgb('#639AB6')).toBe('99 154 182');

  // Test Shorthand.
  expect(toRgb('#fff')).toBe('255 255 255');
});

test('converts from HSL to RGB', () => {
  expect(toRgb('hsl(120, 100%, 52%)')).toBe('12 255 13');
});
