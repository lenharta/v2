import { Theme } from '@/types';

type SectionCSS = Record<'root', string>;

interface SectionRootProps {
  scheme?: Theme.Scheme | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { SectionCSS, SectionRootProps };
