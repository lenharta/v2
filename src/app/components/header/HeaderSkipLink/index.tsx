import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types/global';

export interface HeaderSkipLink extends Omit<ElementProps<'button'>, 'children'> {}

const defaultProps: Partial<HeaderSkipLink> = {};

export const HeaderSkipLink = React.forwardRef<HTMLButtonElement, HeaderSkipLink>((props, ref) => {
  const { ...otherProps } = mergeProps(defaultProps, props);
  return (
    <button {...otherProps} ref={ref} className="header-skip-link">
      Skip Link
    </button>
  );
});

HeaderSkipLink.displayName = '@v2/HeaderSkipLink';
