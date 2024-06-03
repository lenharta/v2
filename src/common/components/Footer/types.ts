type FooterRootClasses = 'root' | 'content';
type FooterRootCSS = Record<FooterRootClasses, string>;

interface FooterRootProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { FooterRootCSS, FooterRootProps, FooterRootClasses };
