import median from "./median";

describe('utils/median', () => {
  it('should return NaN when undefined given', () => {
    expect(median(undefined)).toBeNaN();
  });

  it('should return NaN when empty array given', () => {
    expect(median([])).toBeNaN();
  });

  it('should return the given element when array has only one element', () => {
    expect(median([4])).toBe(4);
  });

  it('should return the median when array has odd number of elements sorted following ascending order ', () => {
    expect(median([4, 5, 7])).toBe(5);
    expect(median([4, 5, 7, 9, 11])).toBe(7);
  });

  it('should return the median when array has even number of elements sorted following ascending order ', () => {
    expect(median([4, 5, 6, 7])).toBe(5.5);
    expect(median([-2, -1, 1, 2])).toBe(0);
  });
});
