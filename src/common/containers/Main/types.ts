import React from 'react';

type MainCSS = Record<'root', string>;

interface MainRootProps {
  children: React.ReactNode;
  className?: string | undefined;
}

export type { MainCSS, MainRootProps };
