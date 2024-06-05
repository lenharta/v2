import React from 'react';

type HeroCSS = Record<'root' | 'title' | 'content', string>;

interface HeroRootProps {
  title?: React.ReactNode | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

interface HeroTitleProps {
  title?: React.ReactNode | undefined;
}

export type { HeroCSS, HeroRootProps, HeroTitleProps };
