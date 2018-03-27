import alpha from '../src/alpha';

test('adds alpha value to color object', () => {
  const hex = {
    red: 'a1',
    green: '16',
    blue: '12',
    model: 'hex'
  };

  expect(alpha(hex, 0.5)).toMatchObject({
    invalid: false,
    red: 'a1',
    green: '16',
    blue: '12',
    model: 'hex',
    alpha: '7f'
  });
});
