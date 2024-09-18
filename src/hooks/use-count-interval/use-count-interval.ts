import * as React from 'react';

export interface UseCountIntervalOptions {
  min?: number;
  max?: number;
  delay?: number;
  operator?: 'INCREMENT' | 'DECREMENT';
  initialValue?: number;
}

export function useCountInterval(options: UseCountIntervalOptions) {
  const { initialValue = 0, min = 0, max = 5000, operator = 'INCREMENT', delay = 1000 } = options;

  const [count, setCount] = React.useState(initialValue);

  const operation = {
    INCREMENT: () => setCount((c) => (c + 1 > max ? c : c + 1)),
    DECREMENT: () => setCount((c) => (c - 1 < min ? c : c - 1)),
  }[operator];

  React.useEffect(() => {
    const interval = setInterval(() => operation(), delay);
    return () => clearInterval(interval);
  }, [initialValue, operator, max, min]);

  return count;
}
