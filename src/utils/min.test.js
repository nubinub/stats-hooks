import min from "./min";

describe('utils/min', () => {
  it('should return NaN when undefined', () => {
    expect(min(undefined)).toEqual(NaN);
  });

  it('should return NaN when empty array given', () => {
    expect(min([])).toEqual(NaN);
  });

  it('should return the given element when only one element in the array', () => {
    expect(min([1])).toEqual(1);
  });

  it('should return the smaller element when multiple positive integers', () => {
    expect(min([1, 3, 7, 4, 2])).toEqual(1);
    expect(min([1, 3, 7, 4, 2, 9, 10, 4])).toEqual(1);
  });

  it('should return the smaller element when multiple negative integers', () => {
    expect(min([-1, -3, -7, -4, -2])).toEqual(-7);
    expect(min([-1, -3, -7, -4, -2, -9, -10, -4])).toEqual(-10);
  });

  it('should return the smaller element when both positive and negative intergers', () => {
    expect(min([1, -1, 2, -7])).toEqual(-7);
    expect(min([-1, 3, 7, -4, 2, -9, -10, 4])).toEqual(-10);
  });

  it('should return the smaller element when both positive and negative floating numbers', () => {
    expect(min([1.1, -1.5, 2.3, -7.0])).toEqual(-7.0);
    expect(min([-1.4, 3.2, 7.5, -4.4, 2, -9.0, -10.5, 4.3])).toEqual(-10.5);
  });
});
