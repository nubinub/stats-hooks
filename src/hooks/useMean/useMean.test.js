import { testHook } from "../../utils/TestHook";
import useMean from "./";

describe('hooks/useMean', () => {
  it('should return NaN when no data provided', () => {
    let mean;

    testHook(() => {
      mean = useMean();
    });

    expect(mean).toBeNaN();
  });

  it('should return NaN when empty array provided', () => {
    let mean;

    testHook(() => {
      mean = useMean([]);
    });

    expect(mean).toBeNaN();
  });

  it('should return the mean when multiple elements provided', () => {
    let mean;

    testHook(() => {
      mean = useMean([1, 2, 3, 4]);
    });

    expect(mean).toBeCloseTo(2.5, 4);

    testHook(() => {
      mean = useMean([1, 1, 1, 1]);
    });

    expect(mean).toBeCloseTo(1, 4);

    testHook(() => {
      mean = useMean([-1, -1, -1, -1]);
    });

    expect(mean).toBeCloseTo(-1, 4);

    testHook(() => {
      mean = useMean([-2, 2, 3, -3]);
    });

    expect(mean).toBeCloseTo(0, 4);
  });

  it('should return the mean when multiple objects and field provided', () => {
    let mean;

    testHook(() => {
      mean = useMean([
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
      ], 'value');
    });

    expect(mean).toBeCloseTo(2.5, 4);
  });
});
