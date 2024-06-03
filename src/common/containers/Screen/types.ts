type ScreenRootClasses = 'root';
type ScreenRootCSS = Record<ScreenRootClasses, string>;

interface ScreenRootProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { ScreenRootCSS, ScreenRootProps, ScreenRootClasses };
