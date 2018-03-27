import parseColor from '../src/parseColor';

test('parses HEX strings', () => {
  const parsed = parseColor('#c97f6a');

  expect(parsed).toMatchObject({
    invalid: false,
    red: 'c9',
    green: '7f',
    blue: '6a'
  });
});


test('parses HSL strings', () => {
  const parsed = parseColor('hsl(31, 30%, 14%)');

  expect(parsed).toMatchObject({
    invalid: false,
    hue: 31,
    sat: 30,
    lum: 14
  });
});

test('parses RGB strings', () => {
  const parsed = parseColor('rgb(31, 234, 12)');

  expect(parsed).toMatchObject({
    invalid: false,
    red: 31,
    green: 234,
    blue: 12
  });
});


test('parses invalid color strings', () => {
  expect(parseColor('welp')).toMatchObject({
    invalid: true
  });
});
