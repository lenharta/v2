export type PageContentProps = {};

export type PageContentBaseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type PageContentExoticComponent = React.ForwardRefExoticComponent<
  PageContentBaseProps & PageContentProps & React.RefAttributes<HTMLDivElement>
>;

export type PageContentComponent = PageContentExoticComponent;
