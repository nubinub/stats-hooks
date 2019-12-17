import standardDeviation from "./standardDeviation";

describe('utils/standardDeviation', () => {
  it('should return NaN when undefined values given', () => {
    expect(standardDeviation(undefined, 1)).toBeNaN();
  });

  it('should return NaN when undefined mean given', () => {
    expect(standardDeviation([1], undefined)).toBeNaN();
  });

  it('should return 0 when array holds only one element', () => {
    expect(standardDeviation([1], 1)).toEqual(0);
  });

  it('should return 0 when array holds only the same elements', () => {
    expect(standardDeviation([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)).toEqual(0);
    expect(standardDeviation([-3, -3, -3, -3, -3, -3, -3], -3)).toEqual(0);
  });

  it('should return the standard deviation', () => {
    expect(standardDeviation([1, 2], 	1.5)).toEqual(0.5);
    expect(standardDeviation([10, 12, 23, 23, 16, 23, 21, 16], 	18)).toEqual(4.898979485566356);
  });
});
