import * as React from 'react';
import { GradientListItem } from './Item';

export type GradientListBaseProps = React.JSX.IntrinsicElements['div'];

export interface GradientListProps extends GradientListBaseProps {}

export interface GradientListComponent {
  (props: GradientListProps): JSX.Element | null;
  displayName?: string;
  Item: typeof GradientListItem;
}

export const GradientList: GradientListComponent = (props) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} className="GradientList" role="listbox">
      {children}
    </div>
  );
};

GradientList.displayName = '@v2/GradientList';
GradientList.Item = GradientListItem;
