import * as React from 'react';

const IS_BROWSER = typeof document !== 'undefined';

export const useIsomorphicEffect = IS_BROWSER ? React.useLayoutEffect : React.useEffect;
