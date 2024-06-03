type HeaderRootClasses = 'root' | 'content';
type HeaderRootCSS = Record<HeaderRootClasses, string>;

interface HeaderRootProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { HeaderRootCSS, HeaderRootProps, HeaderRootClasses };
