import React from 'react';

type HeroCSS = Record<'root' | 'title' | 'content', string>;

interface HeroRootProps {
  title?: string | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { HeroCSS, HeroRootProps };
