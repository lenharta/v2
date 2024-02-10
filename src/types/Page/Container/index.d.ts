export type PageContainerProps = {};

export type PageContainerBaseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type PageContainerExoticComponent = React.ForwardRefExoticComponent<
  PageContainerBaseProps & PageContainerProps & React.RefAttributes<HTMLDivElement>
>;

export type PageContainerComponent = PageContainerExoticComponent;
