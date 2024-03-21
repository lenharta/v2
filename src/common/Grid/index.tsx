import * as React from 'react';
import { mergeProps } from '@/utils';
import { GridColumn } from './Column';

type GridBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface GridProps extends GridBaseProps {}

const defaultProps: Partial<GridProps> = {};

function _Grid(props: GridProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { ...otherProps } = mergeProps(defaultProps, props);
  return <div {...otherProps} ref={ref} />;
}

type GridComponents = { Column: typeof GridColumn };
type GridComponentProps = GridProps & React.RefAttributes<HTMLDivElement>;
type GridComponent = React.ForwardRefExoticComponent<GridComponentProps>;

export const Grid = React.forwardRef(_Grid) as GridComponent & GridComponents;
Grid.displayName = '@v2/Grid';
Grid.Column = GridColumn;

// export type GridBreakpoint = 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
// export type GridSpanProps = Record<GridBreakpoint, number>;

// export interface GridProps {
//   columns: Partial<GridSpanProps>;
// }

// export interface GridColumnProps {
//   span: Partial<GridSpanProps>;
// }

// export interface UseGridStylesInput {
//   columns: Partial<GridSpanProps>;
// }

// export function useGridStyles(props: UseGridStylesInput) {
//   const { columns } = props;

//   const selector = useRandomClassName();

//   const flexBasis = (span: number, totalColumns: number) => {
//     return span ? `${100 / totalColumns / span}` : undefined;
//   };

//   const maxWidth = (span: number, totalColumns: number, grow?: boolean) => {
//     return grow ? '100%' : flexBasis(span, totalColumns);
//   };

//   console.log(flexBasis(4, 12));
//   console.log(maxWidth(4, 12, true));

//   return { selector };
// }

// export const SectionVariables = ({ selector }: { selector: string }) => {
//   return <InlineCSS selector={selector} styles={{}} />;
// };
