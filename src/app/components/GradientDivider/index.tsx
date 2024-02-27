import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { SizeCompact } from '@/types/common';

export type GradientDividerBaseProps = React.JSX.IntrinsicElements['div'];

export interface GradientDividerProps extends GradientDividerBaseProps {
  size?: SizeCompact;
}

export interface GradientDividerComponent {
  (props: GradientDividerProps): JSX.Element | null;
  displayName?: string;
}

const defaultProps: Partial<GradientDividerProps> = {
  size: 'sm',
};

export const GradientDivider: GradientDividerComponent = (props) => {
  const { size, children, ...otherProps } = props;

  const mergedProps = mergeProps({ size }, defaultProps);

  const clxss = clsx('GradientDivider', {
    [`GradientDivider-${mergedProps.size}`]: mergedProps.size,
  });

  return (
    <div {...otherProps} className={clxss}>
      <div className="GradientDivider-row">
        <div className="GradientDivider-cell" />
        <div className="GradientDivider-cell" />
        <div className="GradientDivider-cell" />
        <div className="GradientDivider-cell" />
        <div className="GradientDivider-cell" />
        <div className="GradientDivider-cell" />
        <div className="GradientDivider-cell" />
        <div className="GradientDivider-cell" />
        <div className="GradientDivider-cell" />
        <div className="GradientDivider-cell" />
        <div className="GradientDivider-cell" />
        <div className="GradientDivider-cell" />
      </div>
    </div>
  );
};

GradientDivider.displayName = '@v2/GradientDivider';
