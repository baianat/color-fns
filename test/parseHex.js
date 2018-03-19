import parseHex from '../src/parseHex';

test('parses HEX strings', () => {
  const parsed = parseHex('#c97f6a');

  expect(parsed).toEqual({
    hex: '#c97f6a',
    red: 'c9',
    green: '7f',
    blue: '6a'
  });
});


test('parses shorthand HEX strings', () => {
  const parsed = parseHex('#0f0');

  expect(parsed).toEqual({
    hex: '#00ff00',
    red: '00',
    green: 'ff',
    blue: '00'
  });
});
