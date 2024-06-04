import React from 'react';

type HeroRootCSS = Record<HeroRootClasses, string>;
type HeroRootClasses = 'root' | 'title' | 'content';

interface HeroRootProps {
  title?: string | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { HeroRootClasses, HeroRootCSS, HeroRootProps };
