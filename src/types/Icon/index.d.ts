export type IconProps = {};

export type IconBaseProps = React.SVGProps<SVGSVGElement>;

export type IconExoticComponent = React.ForwardRefExoticComponent<
  IconBaseProps & IconProps & React.RefAttributes<SVGSVGElement>
>;

export type IconComponent = IconExoticComponent;
