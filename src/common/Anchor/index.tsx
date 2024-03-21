import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types';

export interface AnchorProps extends ElementProps<'a'> {
  underline?: boolean;
}

const defaultProps: Partial<AnchorProps> = {};

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  const { className, style, underline, ...otherProps } = mergeProps(defaultProps, props);
  const isUnderlined = !underline ? undefined : 'underline';
  return (
    <a
      {...otherProps}
      ref={ref}
      style={{ ...style, textDecorationLine: isUnderlined }}
      className={clsx('anchor', className)}
    />
  );
});

Anchor.displayName = '@v2/Anchor';
