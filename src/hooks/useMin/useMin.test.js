import { testHook } from "../../utils/TestHook";
import useMin from "./";

describe('hooks/useMin', () => {
  it('should return NaN when no data provided', () => {
    let min;

    testHook(() => {
      min = useMin();
    });

    expect(min).toBeNaN();
  });

  it('should return NaN when empty array provided', () => {
    let min;

    testHook(() => {
      min = useMin([]);
    });

    expect(min).toBeNaN();
  });

  it('should return the given element when array with one element provided', () => {
    let min;

    testHook(() => {
      min = useMin([1]);
    });

    expect(min).toEqual(1);
  });

  it('should return the smallest element when array with multiple element provided', () => {
    let min;

    testHook(() => {
      min = useMin([1, 4, 6, -1, 7]);
    });

    expect(min).toEqual(-1);
  });

  it('should return the smallest element when array with multiple objects provided and field provided', () => {
    let min;

    testHook(() => {
      min = useMin([
        {value: 1},
        {value: -1},
        {value: 3},
      ], 'value');
    });

    expect(min).toEqual(-1);
  });
});
