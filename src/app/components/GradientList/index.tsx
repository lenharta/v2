import * as React from 'react';

export type GradientListBaseProps = React.JSX.IntrinsicElements['div'];

export interface GradientListProps extends GradientListBaseProps {}

export const GradientList = (props: GradientListProps) => {
  const {} = props;
  return <div className="GradientList" role="listbox"></div>;
};
