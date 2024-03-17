import { Size } from '@/types/common';

export type GridColumnBreakpoint = 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GridColumnSpan = Record<GridColumnBreakpoint, number>;
export type GridColumns = Record<GridColumnBreakpoint, number>;

type GridBaseProps = React.ComponentPropsWithoutRef<'div'>;
type GridColumnBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface GridProps extends GridBaseProps {
  gutter?: number | Size;
  columns?: Partial<GridColumns>;
}

export interface GridColumnProps extends GridColumnBaseProps {
  span?: Partial<GridColumnSpan>;
}
