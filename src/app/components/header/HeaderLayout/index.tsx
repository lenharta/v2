import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types/global';
import { HeaderLogoLink } from '../HeaderLogoLink';
import { HeaderSkipLink } from '../HeaderSkipLink';

export interface HeaderLayoutProps extends Omit<ElementProps<'header'>, 'children'> {}

const defaultProps: Partial<HeaderLayoutProps> = {};

export const HeaderLayout = React.forwardRef<HTMLElement, HeaderLayoutProps>((props, ref) => {
  const { ...otherProps } = mergeProps(defaultProps, props);
  return (
    <header {...otherProps} ref={ref} className="header-layout">
      <HeaderSkipLink />
      <HeaderLogoLink />
    </header>
  );
});

HeaderLayout.displayName = '@v2/HeaderLayout';
