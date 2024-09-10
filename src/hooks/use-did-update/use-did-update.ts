import * as React from 'react';

function useDidUpdate(cb: React.EffectCallback, dependencies?: React.DependencyList) {
  const mounted = React.useRef(false);

  React.useEffect(
    () => () => {
      mounted.current = false;
    },
    []
  );

  React.useEffect(() => {
    if (mounted.current) {
      return cb();
    }

    mounted.current = true;

    return undefined;
  }, dependencies);
}

export { useDidUpdate };
