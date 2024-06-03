import React from 'react';

type HeroRootCSS = Record<HeroRootClasses, string>;
type HeroRootClasses = 'root' | 'titlebox' | 'contentbox';

interface HeroRootProps {
  title?: React.ReactElement | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { HeroRootClasses, HeroRootCSS, HeroRootProps };
