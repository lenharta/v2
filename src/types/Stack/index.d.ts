export type StackProps = {};

export type StackBaseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type StackExoticComponent = React.ForwardRefExoticComponent<
  StackBaseProps & StackProps & React.RefAttributes<HTMLDivElement>
>;

export type StackComponent = StackExoticComponent;
