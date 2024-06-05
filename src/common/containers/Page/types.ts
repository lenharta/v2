type PageCSS = Record<'root', string>;

interface PageRootProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { PageCSS, PageRootProps };
