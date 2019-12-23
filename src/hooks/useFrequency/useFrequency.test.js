import { testHook } from "../../utils/TestHook";
import useFrequency from "./";

describe('hooks/useFrequency', () => {
  it('should return an empty array when no data provided', () => {
    let frequency;

    testHook(() => {
      frequency = useFrequency();
    });

    expect(frequency).toEqual([]);
  });

  it('should return an array with one element when data has one element', () => {
    let frequency;

    testHook(() => {
      frequency = useFrequency([1]);
    });

    expect(frequency).toEqual([{lowerBound: 0, upperBound: 10, n: 1}]);
  });

  it('should return an array with the frequency when data has multiple elements', () => {
    let frequency;

    testHook(() => {
      frequency = useFrequency([1, 11, 17, 24, -11]);
    });

    expect(frequency).toEqual([{lowerBound: -20, upperBound: -10, n: 1}, {lowerBound: -10, upperBound: 0, n: 0}, {lowerBound: 0, upperBound: 10, n: 1}, {lowerBound: 10, upperBound: 20, n: 2}, {lowerBound: 20, upperBound: 30, n: 1}]);
  });
});
