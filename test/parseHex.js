import parseHex from '../src/parseHex';

test('parses HEX strings', () => {
  const parsed = parseHex('#c97f6a');

  expect(parsed).toMatchObject({
    invalid: false,
    red: 'c9',
    green: '7f',
    blue: '6a'
  });
});


test('parses shorthand HEX strings', () => {
  const parsed = parseHex('#0f0');

  expect(parsed).toMatchObject({
    invalid: false,
    red: '00',
    green: 'ff',
    blue: '00'
  });

  expect(parseHex('welp')).toMatchObject({
    invalid: true
  });
});
