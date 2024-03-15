import * as React from 'react';
import { mergeProps } from '@/utils';

type GridColumnBaseProps = React.ComponentPropsWithoutRef<'div'>;

interface GridColumnProps extends GridColumnBaseProps {}

const defaultProps: Partial<GridColumnProps> = {};

function _GridColumn(props: GridColumnProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { ...otherProps } = mergeProps(defaultProps, props);
  return <div {...otherProps} ref={ref} />;
}

export const GridColumn = React.forwardRef(_GridColumn) as React.ForwardRefExoticComponent<
  GridColumnProps & React.RefAttributes<HTMLDivElement>
>;
