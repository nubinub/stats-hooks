import { testHook } from "../../utils/TestHook";
import useAscending from "./";

describe('hooks/useDescending', () => {
  it('should return an empty array when no data provided', () => {
    let ascending;

    testHook(() => {
      ascending = useAscending();
    });

    expect(ascending).toEqual([]);
  });

  it('should return an empty array when empty array provided', () => {
    let ascending;

    testHook(() => {
      ascending = useAscending([]);
    });

    expect(ascending).toEqual([]);
  });

  it('should return the given array when array with one element provided', () => {
    let ascending;

    testHook(() => {
      ascending = useAscending([1]);
    });

    expect(ascending).toEqual([1]);
  });

  it('should return the sorted array following ascending order when array with multiple element provided', () => {
    let ascending;

    testHook(() => {
      ascending = useAscending([1, 4, 6, -1, 7]);
    });

    expect(ascending).toEqual([-1, 1, 4, 6, 7]);
  });

  it('should return the sorted array following ascending order when array with multiple objects provided and field provided', () => {
    let ascending;

    testHook(() => {
      ascending = useAscending([
        {value: 1},
        {value: -1},
        {value: 3},
      ], 'value');
    });

    expect(ascending).toEqual([
      {value: -1},
      {value: 1},
      {value: 3},
    ]);
  });
});
