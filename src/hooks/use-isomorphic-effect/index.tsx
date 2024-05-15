import * as React from 'react';

const isBrowser = typeof document !== 'undefined';

const useIsomorphicEffect = isBrowser ? React.useLayoutEffect : React.useEffect;

export { useIsomorphicEffect };
