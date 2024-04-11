import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface HeaderSearchProps {}

export type HeaderSearchFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: HeaderSearchProps;
}>;

export const HeaderSearch = factory<HeaderSearchFactory>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="page-header-search">
      <span>Header Search</span>
    </div>
  );
});

HeaderSearch.displayName = 'Header.Search';
