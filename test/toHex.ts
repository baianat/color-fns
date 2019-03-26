import { toHex } from '../src/toHex';

test('converts any of the supported color models to HEX', () => {
  const neonGreen = {
    blue: '14',
    red: '39',
    green: 'ff'
  };

  expect(toHex('rgb(57, 255, 20)')).toMatchObject(neonGreen);
  // color range strikes again.
  expect(toHex('hsl(109.88, 100%, 50%)')).toMatchObject({
    red: '2b',
    blue: '00',
    green: 'ff'
  });
  expect(toHex('hsv(110.55, 92%, 100%)')).toMatchObject(neonGreen);
  expect(toHex('#39ff14')).toMatchObject(neonGreen);
  // color range strikes again. (close enough!)
  expect(toHex('cmyk(78, 0, 92, 0)')).toMatchObject({
    red: '38', // almost 39
    blue: '14',
    green: 'ff'
  });
  expect(toHex('wat')).toBe(null);
});
