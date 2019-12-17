import { testHook } from "../../utils/TestHook";
import useDescending from "./";

describe('hooks/useDescending', () => {
  it('should return an empty array when no data provided', () => {
    let descending;

    testHook(() => {
      descending = useDescending();
    });

    expect(descending).toEqual([]);
  });

  it('should return an empty array when empty array provided', () => {
    let descending;

    testHook(() => {
      descending = useDescending([]);
    });

    expect(descending).toEqual([]);
  });

  it('should return the given array when array with one element provided', () => {
    let descending;

    testHook(() => {
      descending = useDescending([1]);
    });

    expect(descending).toEqual([1]);
  });

  it('should return the sorted array following descending order when array with multiple element provided', () => {
    let descending;

    testHook(() => {
      descending = useDescending([1, 4, 6, -1, 7]);
    });

    expect(descending).toEqual([7, 6, 4, 1, -1]);
  });

  it('should return the sorted array following descending order when array with multiple objects provided and field provided', () => {
    let descending;

    testHook(() => {
      descending = useDescending([
        {value: 1},
        {value: -1},
        {value: 3},
      ], 'value');
    });

    expect(descending).toEqual([
      {value: 3},
      {value: 1},
      {value: -1},
    ]);
  });
});
