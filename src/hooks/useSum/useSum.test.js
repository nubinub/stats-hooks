import { testHook } from "../../utils/TestHook";
import useSum from "./";

describe('hooks/useSum', () => {
  it('should return 0 if data is undefined', () => {
    let sum;

    testHook(() => {
      sum = useSum();
    });

    expect(sum).toEqual(0);
  });

  it('should return 0 if data is empty', () => {
    let sum;

    testHook(() => {
      sum = useSum([]);
    });

    expect(sum).toEqual(0);
  });

  it('should return the element when data holds one element', () => {
    let sum;

    testHook(() => {
      sum = useSum([7]);
    });

    expect(sum).toEqual(7);
  });

  it('should return the sum when data holds multiple element', () => {
    let sum;

    testHook(() => {
      sum = useSum([1, 1.3, -2]);
    });

    expect(sum).toBeCloseTo(0.3, 4);
  });
});
