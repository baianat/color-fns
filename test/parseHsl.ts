import { parseHsl } from '../src/parseHsl';

test('parses HSL strings', () => {
  const parsed = parseHsl('hsl(31.2, 30.2%, 14.15%)');

  expect(parsed).toMatchObject({
    hue: 31.2,
    sat: 30.2,
    lum: 14.15
  });

  expect(parseHsl('welp')).toBeNull();

  // Decimals can be disabled.
  const hsl = parseHsl('hsl(31.2, 30.2%, 14.15%)', { allowDecimal: false });
  expect(hsl).toBe(null);
  expect(parseHsl(null)).toBe(null);
});
