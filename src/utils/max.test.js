import max from "./max";

describe('utils/max', () => {
  it('should return NaN when undefined', () => {
    expect(max(undefined)).toEqual(NaN);
  });

  it('should return NaN when empty array given', () => {
    expect(max([])).toEqual(NaN);
  });

  it('should return the given element when only one element in the array', () => {
    expect(max([1])).toEqual(1);
  });

  it('should return the greater element when multiple positive elements', () => {
    expect(max([1, 3, 7, 4, 2])).toEqual(7);
    expect(max([1, 3, 7, 4, 2, 9, 10, 4])).toEqual(10);
  });

  it('should return the greater element when multiple negative elements', () => {
    expect(max([-1, -3, -7, -4, -2])).toEqual(-1);
    expect(max([-1, -3, -7, -4, -2, -9, -10, -4])).toEqual(-1);
  });

  it('should return the greater element when both positive and negative elements', () => {
    expect(max([1, -1, 2, -7])).toEqual(2);
    expect(max([-1, 3, 7, -4, 2, -9, -10, 4])).toEqual(7);
  });
});
