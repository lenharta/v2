interface TitleElementProps {
  h1?: boolean | undefined;
  h2?: boolean | undefined;
  h3?: boolean | undefined;
  h4?: boolean | undefined;
  h5?: boolean | undefined;
  h6?: boolean | undefined;
}

interface TitleProps extends TitleElementProps {
  component?: React.ElementType;
}

export type { TitleElementProps, TitleProps };
