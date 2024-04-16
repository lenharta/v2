import React from 'react';

export interface MotionStateOptions {
  timeout?: number | undefined;
  keepMounted?: boolean | undefined;
  dependencies?: React.DependencyList;
}

const defaultOptions: MotionStateOptions = {
  dependencies: [],
  timeout: 3000,
};

export function useMotionState(options?: MotionStateOptions) {
  const { timeout, dependencies, keepMounted } = options ?? {};

  const ref = React.useRef<NodeJS.Timeout>();
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);

    if (!mounted && !keepMounted) {
      ref.current = setTimeout(() => {
        setMounted(false);
      }, timeout || defaultOptions.timeout);
    }

    return () => {
      clearTimeout(ref.current);
    };
  }, dependencies || defaultOptions.dependencies);

  return mounted;
}
