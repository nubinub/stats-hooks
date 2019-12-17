import { testHook } from "../../utils/TestHook";
import useMedian from "./";

describe('hooks/useMedian', () => {
  it('should return NaN when no data provided', () => {
    let median;

    testHook(() => {
      median = useMedian();
    });

    expect(median).toBeNaN();
  });

  it('should return NaN when empty array provided', () => {
    let median;

    testHook(() => {
      median = useMedian([]);
    });

    expect(median).toBeNaN();
  });

  it('should return the given element when one element provided', () => {
    let median;

    testHook(() => {
      median = useMedian([1]);
    });

    expect(median).toEqual(1);
  });

  it('should return the median when odd number of elements provided', () => {
    let median;

    testHook(() => {
      median = useMedian([1, 3, 2]);
    });

    expect(median).toBeCloseTo(2, 4);

    testHook(() => {
      median = useMedian([1, 3, 2, 4, 5]);
    });

    expect(median).toBeCloseTo(3, 4);
  });

  it('should return the median when even number of elements provided', () => {
    let median;

    testHook(() => {
      median = useMedian([1, 3, 2, 4]);
    });

    expect(median).toBeCloseTo(2.5, 4);

    testHook(() => {
      median = useMedian([1, 2, 3, -3, -2, -1]);
    });

    expect(median).toBeCloseTo(0, 4);
  });
});
