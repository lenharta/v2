export type GradientListItemBaseProps = React.JSX.IntrinsicElements['div'];

export interface GradientListItemProps extends GradientListItemBaseProps {}

export interface GradientListItemComponent {
  (props: GradientListItemProps): JSX.Element | null;
  displayName?: string;
}

export const GradientListItem = (props: GradientListItemProps) => {
  const { children, ...otherProps } = props;
  return (
    <div className="GradientList-item" {...otherProps}>
      {children}
    </div>
  );
};

GradientListItem.displayName = '@v2/GradientList.Item';
