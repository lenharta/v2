export type ButtonProps = {};

export type ButtonBaseProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonExoticComponent = React.ForwardRefExoticComponent<
  ButtonBaseProps & ButtonProps & React.RefAttributes<HTMLButtonElement>
>;

export type ButtonComponent = ButtonExoticComponent;
