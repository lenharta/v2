type ScreenCSS = Record<'root', string>;

interface ScreenRootProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { ScreenCSS, ScreenRootProps };
