import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface HeaderLogoProps {}

export type HeaderLogoFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: HeaderLogoProps;
}>;

export const HeaderLogo = factory<HeaderLogoFactory>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="header-logo">
      <span>Header Logo</span>
    </div>
  );
});

HeaderLogo.displayName = 'Header.Logo';
