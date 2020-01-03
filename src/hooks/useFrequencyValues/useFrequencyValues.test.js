import useFrequencyValues from './';
import { testHook } from '../../utils/TestHook';

describe('hooks/useFrequencyValues', () => {
  it('should return an empty array when no data provided', () => {
    let frequency;

    testHook(() => {
      frequency = useFrequencyValues();
    });

    expect(frequency).toEqual([]);
  });

  it('should return an empty array when empty array provided', () => {
    let frequency;

    testHook(() => {
      frequency = useFrequencyValues([]);
    });

    expect(frequency).toEqual([]);
  });

  it('should return the frequency of each word when an array containing words is provided', () => {
    let frequency;

    testHook(() => {
      frequency = useFrequencyValues(['a', 'bcd', 'ab', 'bc', 'abcd', 'a']);
    });

    expect(frequency).toHaveLength(5);
    expect(frequency).toContainEqual(
      {value: 'a', n: 2}
    );
    expect(frequency).toContainEqual(
      {value: 'ab', n: 1}
    );
    expect(frequency).toContainEqual(
      {value: 'bcd', n: 1}
    );
    expect(frequency).toContainEqual(
      {value: 'bc', n: 1}
    );
    expect(frequency).toContainEqual(
      {value: 'abcd', n: 1}
    );
  });
});
