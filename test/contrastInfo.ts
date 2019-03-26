import { contrastInfo } from '../src/contrastInfo';

test('it provides WCAG contrast info between two HSL colors', () => {
  const c1 = { red: 20, green: 210, blue: 255 };
  const c2 = { red: 97, green: 26, blue: 149 };

  expect(
    contrastInfo(c1, c2)
  ).toMatchObject({
    ratio: 5.59,
    isAA: true,
    isAALarge: true,
    isAAA: false,
    isAAALarge: true,
    isUIAA: true
  });
});
