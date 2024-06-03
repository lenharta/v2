import { Theme } from '@/types';

type BoxRootCSS = Record<BoxRootClasses, string>;
type BoxRootClasses = 'root';

interface BoxRootProps {
  scheme?: Theme.Scheme | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { BoxRootCSS, BoxRootClasses, BoxRootProps };
