import { parseHsl } from '../src/parseHsl';

test('parses HSL strings', () => {
  const parsed = parseHsl('hsl(31, 30%, 14%)');

  expect(parsed).toMatchObject({
    hue: 31,
    sat: 30,
    lum: 14
  });

  expect(parseHsl('welp')).toBeNull();
});
