import * as React from 'react';
import { mergeProps } from '@/utils';

type GridBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface GridProps extends GridBaseProps {}

const defaultProps: Partial<GridProps> = {};

function _Grid(props: GridProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { ...otherProps } = mergeProps(defaultProps, props);
  return <div {...otherProps} ref={ref} />;
}

export const Grid = React.forwardRef(_Grid) as React.ForwardRefExoticComponent<
  GridProps & React.RefAttributes<HTMLDivElement>
>;
