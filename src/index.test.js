import { useDebounce } from './'
import { renderHook, act } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useDebounce', () => {
  it('properly debounces input', () => {
    let input = 0;
    const { result } = renderHook(() => useDebounce(input, 1000));

    expect(result.current).toBe(0);

    // Fast-forward 1sec
    act(() => {
      input = 1;
      jest.advanceTimersByTime(1000);
    });
    expect(result.current).toBe(0);


    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Check after total 2 sec
    expect(result.current).toBe(1);
  })
})
