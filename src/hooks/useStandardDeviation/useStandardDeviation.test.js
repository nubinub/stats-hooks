import { testHook } from "../../utils/TestHook";
import useStandardDeviation from "./";

describe('hooks/useStandardDeviation', () => {
  it('should return NaN when no data provided', () => {
    let sd;

    testHook(() => {
      sd = useStandardDeviation();
    });

    expect(sd).toBeNaN();
  });

  it('should return NaN when empty array provided', () => {
    let sd;

    testHook(() => {
      sd = useStandardDeviation([]);
    });

    expect(sd).toBeNaN();
  });

  it('should return 0 when array with one element provided', () => {
    let sd;

    testHook(() => {
      sd = useStandardDeviation([1]);
    });

    expect(sd).toBeCloseTo(0, 4);

    testHook(() => {
      sd = useStandardDeviation([7]);
    });

    expect(sd).toBeCloseTo(0, 4);

    testHook(() => {
      sd = useStandardDeviation([-1]);
    });

    expect(sd).toBeCloseTo(0, 4);
  });

  it('should return 0 when array with multiple equal elements provided', () => {
    let sd;

    testHook(() => {
      sd = useStandardDeviation([1, 1]);
    });

    expect(sd).toBeCloseTo(0, 4);

    testHook(() => {
      sd = useStandardDeviation([7, 7, 7]);
    });

    expect(sd).toBeCloseTo(0, 4);

    testHook(() => {
      sd = useStandardDeviation([-1, -1, -1]);
    });

    expect(sd).toBeCloseTo(0, 4);
  });

  it('should return standard deviantion when array with multiple elements provided', () => {
    let sd;

    testHook(() => {
      sd = useStandardDeviation([1, 2]);
    });

    expect(sd).toBeCloseTo(0.5, 4);

    testHook(() => {
      sd = useStandardDeviation([0, 4]);
    });

    expect(sd).toBeCloseTo(2, 4);

    testHook(() => {
      sd = useStandardDeviation([0, 2]);
    });

    expect(sd).toBeCloseTo(1, 4);

    testHook(() => {
      sd = useStandardDeviation([0, 2, 0, 2]);
    });

    expect(sd).toBeCloseTo(1, 4);
  });

});
