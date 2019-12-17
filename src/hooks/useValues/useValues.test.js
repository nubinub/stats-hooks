import { testHook } from "../../utils/TestHook";
import useValues from "./index";

describe('hooks/useValues', () => {
  it('should return an empty array when no values provided', () => {
    let values;

    testHook(() => {
      values = useValues();
    });

    expect(values).toEqual([]);
  });

  it('should return the given array when no field provided', () => {
    let values;

    testHook(() => {
      values = useValues([1, 2, 3]);
    });

    expect(values).toEqual([1, 2, 3]);
  });

  it('should return the array of values when field provided', () => {
    let values;

    testHook(() => {
      values = useValues([{value: 1, anotherValue: 3},{value: 2, anotherValue: 2}, {value: 3, anotherValue: 1}], 'value');
    });

    expect(values).toEqual([1, 2, 3]);

    testHook(() => {
      values = useValues([{value: 1, anotherValue: 3},{value: 2, anotherValue: 2}, {value: 3, anotherValue: 1}], 'anotherValue');
    });

    expect(values).toEqual([3, 2, 1]);
  });
});
