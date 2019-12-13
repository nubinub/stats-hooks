import mean from "./mean";

describe('utils/mean', () => {
  it('should return NaN when sum is undefined', () => {
    expect(mean(undefined, 2)).toBeNaN();
  });

  it('should return NaN when length is undefined', () => {
    expect(mean(2, undefined)).toBeNaN();
  });

  it('should return NaN when length is 0', () => {
    expect(mean(2, 0)).toBeNaN();
  });

  it('should return sum divided by length', () => {
    expect(mean(2, 1)).toBe(2);
    expect(mean(0, 7)).toBe(0);
    expect(mean(21, 7)).toBe(3);
    expect(mean(21, 4)).toBe(5.25);
    expect(mean(-21, 4)).toBe(-5.25);
  });
});
