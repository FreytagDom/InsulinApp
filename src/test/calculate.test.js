import handleInsulinUnit from '../utils/calculate';

describe(handleInsulinUnit, () => {
  test(handleInsulinUnit, () => {
    expect(handleInsulinUnit(236, 65, 12, 10)).toBe('19.0');
  });
  test(handleInsulinUnit, () => {
    expect(handleInsulinUnit(220, 55, 13, 12)).toBe('14.2');
  });
  test(handleInsulinUnit, () => {
    expect(handleInsulinUnit(180, 40, 14, 15)).toBe('8.2');
  });
  test(handleInsulinUnit, () => {
    expect(handleInsulinUnit(89, 56, 12, 0)).toBe('4.7');
  })
  test(handleInsulinUnit, () => {
    expect(handleInsulinUnit(75, 65, 13, 0)).toBe('5.0');
  });
});
