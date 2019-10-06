import { isDark } from '../src/isDark';

test('Checks if a color is dark', () => {
  expect(isDark({ red: 0, blue: 0, green: 0 })).toBe(true);
  expect(isDark({ red: 255, blue: 255, green: 255 })).toBe(false);

  expect(isDark({ red: 7, blue: 45, green: 32 })).toBe(true);
});
