import * as React from 'react';

const isBrowser = typeof document !== 'undefined';

export const useIsomorphicEffect = isBrowser ? React.useLayoutEffect : React.useEffect;
