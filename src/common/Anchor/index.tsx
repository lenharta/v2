import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { AnchorComponent, AnchorComponentRender, AnchorProps } from './type';

const defaultProps: Partial<AnchorProps> = {};

const AnchorRender: AnchorComponentRender = (props, ref) => {
  const { className, style, underline, ...otherProps } = mergeProps(defaultProps, props);
  const textDecoration = !underline ? undefined : 'underline';
  return (
    <a
      {...otherProps}
      ref={ref}
      style={{ ...style, textDecoration }}
      className={clsx('anchor', className)}
    />
  );
};

export const Anchor = React.forwardRef(AnchorRender) as AnchorComponent;
Anchor.displayName = '@v2/Anchor';
