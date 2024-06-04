type HeaderCSSElements = 'root';
type HeaderCSS = Record<HeaderCSSElements, string>;

interface HeaderRootProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { HeaderCSS, HeaderCSSElements, HeaderRootProps };
