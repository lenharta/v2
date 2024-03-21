import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types';

export interface SectionAnchorProps extends ElementProps<'a'> {
  id: string;
  label: string;
}

const defaultProps: Partial<SectionAnchorProps> = {};

export const SectionAnchor = React.forwardRef<HTMLAnchorElement, SectionAnchorProps>(
  (props, ref) => {
    const { id, label, className, ...otherProps } = mergeProps(defaultProps, props);
    return (
      <a
        {...otherProps}
        id={id}
        ref={ref}
        className={clsx('section-anchor', className)}
        aria-label={[label, 'anchor'].join(' ')}
      />
    );
  }
);
