import clsx from 'clsx';
import * as React from 'react';
import { VisuallyHidden } from '../VisuallyHidden';
import { AnchorComponent, AnchorComponentRender } from './types';

const AnchorRender: AnchorComponentRender = (props, ref) => {
  const { className, style, underline, ...otherProps } = props;
  return (
    <VisuallyHidden>
      <a
        {...otherProps}
        ref={ref}
        className={clsx('anchor', className)}
        style={{ ...style, textDecoration: !underline ? undefined : 'underline' }}
      />
    </VisuallyHidden>
  );
};

export const Anchor = React.forwardRef(AnchorRender) as AnchorComponent;
Anchor.displayName = '@v2/Anchor';
