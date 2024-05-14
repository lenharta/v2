import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { SearchInput } from '../SearchInput';
import { SearchClear } from '../SearchClear';
import { SearchAction } from '../SearchAction';
import { useFocusContext } from '@/app';

export interface SearchBoxProps {}

export type SearchBoxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SearchBoxProps;
  comps: {
    Input: typeof SearchInput;
    Clear: typeof SearchClear;
    Action: typeof SearchAction;
  };
}>;

export const SearchBox = factory<SearchBoxFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  const focusCTX = useFocusContext();

  return (
    <div {...forwardedProps} ref={ref} className={cx('search-box')} role="searchbox">
      <SearchBox.Input
        ref={focusCTX.searchInputRef}
        placeholder="Search..."
        onFocusHeader={focusCTX.onFocusHeader}
        onFocusSearchClear={focusCTX.onFocusSearchClear}
      />

      <SearchBox.Clear
        ref={focusCTX.searchClearRef}
        onFocusSearchInput={focusCTX.onFocusSearchInput}
        onFocusSearchClear={focusCTX.onFocusSearchClear}
        onFocusSearchAction={focusCTX.onFocusSearchAction}
      />

      <SearchBox.Action
        ref={focusCTX.searchActionRef}
        onFocusSearchInput={focusCTX.onFocusSearchInput}
        onFocusSearchClear={focusCTX.onFocusSearchClear}
        onFocusSearchAction={focusCTX.onFocusSearchAction}
      />
    </div>
  );
});

SearchBox.Input = SearchInput;
SearchBox.Clear = SearchClear;
SearchBox.Action = SearchAction;
SearchBox.displayName = '@v2/SearchBox';
