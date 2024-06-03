import React from 'react';

type MainRootClasses = 'root';
type MainRootCSS = Record<MainRootClasses, string>;

interface MainRootProps {
  children: React.ReactNode;
  className?: string | undefined;
}

export type { MainRootClasses, MainRootCSS, MainRootProps };
