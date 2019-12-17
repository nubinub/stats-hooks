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

  it('should return the greatest element when multiple positive integers', () => {
    expect(max([1, 3, 7, 4, 2])).toEqual(7);
    expect(max([1, 3, 7, 4, 2, 9, 10, 4])).toEqual(10);
  });

  it('should return the greatest element when multiple negative integers', () => {
    expect(max([-1, -3, -7, -4, -2])).toEqual(-1);
    expect(max([-1, -3, -7, -4, -2, -9, -10, -4])).toEqual(-1);
  });

  it('should return the greatest element when both positive and negative intergers', () => {
    expect(max([1, -1, 2, -7])).toEqual(2);
    expect(max([-1, 3, 7, -4, 2, -9, -10, 4])).toEqual(7);
  });

  it('should return the greatest element when both positive and negative floating numbers', () => {
    expect(max([1.1, -1.5, 2.3, -7.0])).toEqual(2.3);
    expect(max([-1.4, 3.2, 7.5, -4.4, 2, -9.0, -10.5, 4.3])).toEqual(7.5);
  });
});
