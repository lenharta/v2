export type TitleProps = {};

export type TitleBaseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export type TitleExoticComponent = React.ForwardRefExoticComponent<
  TitleBaseProps & TitleProps & React.RefAttributes<HTMLHeadingElement>
>;

export type TitleComponent = TitleExoticComponent;
