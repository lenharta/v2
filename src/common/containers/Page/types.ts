type PageRootCSS = Record<PageRootClasses, string>;
type PageRootClasses = 'root';

interface PageRootProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { PageRootCSS, PageRootClasses, PageRootProps };
