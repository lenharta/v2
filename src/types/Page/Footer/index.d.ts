export type PageFooterProps = {};

export type PageFooterBaseProps = React.DetailedHTMLProps<
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
  HTMLDivElement
>;

export type PageFooterExoticComponent = React.ForwardRefExoticComponent<
  PageFooterBaseProps & PageFooterProps & React.RefAttributes<HTMLDivElement>
>;

export type PageFooterComponent = PageFooterExoticComponent;
