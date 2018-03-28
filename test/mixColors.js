import mixColors from '../src/mixColors';

test('mix two colors object', () => {
  const color1 = {
    red: 'ff',
    green: '00',
    blue: '7f',
    model: 'hex',
    alpha: '00'
  };
  const color2 = {
    red: '00',
    green: 'ff',
    blue: '00',
    model: 'hex',
    alpha: 'ff'
  };

  expect(mixColors(color1, color2, 0.5)).toMatchObject({
    invalid: false,
    red: 127.5,
    green: 127.5,
    blue: 63.5,
    alpha: 0.5,
    model: 'rgb'
  });
});
