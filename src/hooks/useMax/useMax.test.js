import { testHook } from "../../utils/TestHook";
import useMax from "./";

describe('hooks/useMax', () => {
  it('should return NaN when no data provided', () => {
    let max;

    testHook(() => {
      max = useMax();
    });

    expect(max).toBeNaN();
  });

  it('should return NaN when empty array provided', () => {
    let max;

    testHook(() => {
      max = useMax([]);
    });

    expect(max).toBeNaN();
  });

  it('should return the given element when array with one element provided', () => {
    let max;

    testHook(() => {
      max = useMax([1]);
    });

    expect(max).toEqual(1);
  });

  it('should return the greatest element when array with multiple element provided', () => {
    let max;

    testHook(() => {
      max = useMax([1, 4, 6, -1, 7]);
    });

    expect(max).toEqual(7);
  });

  it('should return the greatest element when array with multiple objects provided and field provided', () => {
    let max;

    testHook(() => {
      max = useMax([
        {value: 1},
        {value: -1},
        {value: 3},
      ], 'value');
    });

    expect(max).toEqual(3);
  });
});
