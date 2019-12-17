import { testHook } from "../../utils/TestHook";
import useReverse from "./";

describe('hooks/useReverse', () => {
  it('should return an empty array when no data provided', () => {
    let reverse;

    testHook(() => {
      reverse = useReverse();
    });

    expect(reverse).toEqual([]);
  });

  it('should return an empty array when empty array provided', () => {
    let reverse;

    testHook(() => {
      reverse = useReverse([]);
    });

    expect(reverse).toEqual([]);
  });

  it('should return the same array when array with one element provided', () => {
    let reverse;

    testHook(() => {
      reverse = useReverse([1]);
    });

    expect(reverse).toEqual([1]);
  });

  it('should return the reverse ordered array when array with multiple elements provided', () => {
    let reverse;

    testHook(() => {
      reverse = useReverse([1, 2, 3, 4]);
    });

    expect(reverse).toEqual([4, 3, 2, 1]);
  });
});
