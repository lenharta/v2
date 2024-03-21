import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { GridColumnProps } from '../types';

const defaultProps: Partial<GridColumnProps> = {
  span: { base: 12 },
};

const getBaseValue = (span: GridColumnProps['span']) => {
  return span && span.base ? span.base : undefined;
};

function _GridColumn(props: GridColumnProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { span, className, ...otherProps } = mergeProps(defaultProps, props);
  const clxss = clsx('grid-column', className);
  return <div {...otherProps} ref={ref} className={clxss} />;
}

export const GridColumn = React.forwardRef(_GridColumn) as React.ForwardRefExoticComponent<
  GridColumnProps & React.RefAttributes<HTMLDivElement>
>;

GridColumn.displayName = '@v2/Grid.Column';
