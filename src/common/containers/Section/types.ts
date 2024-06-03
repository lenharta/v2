type SectionRootCSS = Record<SectionRootClasses, string>;
type SectionRootClasses = 'root';

interface SectionRootProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { SectionRootCSS, SectionRootProps, SectionRootClasses };
