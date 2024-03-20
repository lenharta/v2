import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types/global';

export interface HeaderLogoLink extends Omit<ElementProps<'button'>, 'children'> {}

const defaultProps: Partial<HeaderLogoLink> = {};

export const HeaderLogoLink = React.forwardRef<HTMLButtonElement, HeaderLogoLink>((props, ref) => {
  const { ...otherProps } = mergeProps(defaultProps, props);
  return (
    <button {...otherProps} ref={ref} className="header-logo-link">
      Logo Link
    </button>
  );
});

HeaderLogoLink.displayName = '@v2/HeaderLogoLink';
