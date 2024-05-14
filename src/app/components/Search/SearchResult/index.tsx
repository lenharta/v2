import { cx } from '@/app/utils';
import { factory } from '@/core/factory';
import { SearchItem } from '../SearchItem';
import { useNavigate } from 'react-router-dom';
import { Factory, Site } from '@/types';

export interface SearchResultProps {
  items: Site.SearchItem[];
}

export type SearchResultFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SearchResultProps;
  comps: {
    Item: typeof SearchItem;
  };
}>;

export const SearchResult = factory<SearchResultFactory>((props, ref) => {
  const { items = [], ...forwardedProps } = props;
  const navigate = useNavigate();

  return (
    <div {...forwardedProps} ref={ref} className={cx('search-result')} role="listbox">
      {items.map((item) => (
        <SearchResult.Item {...item} key={item.id} navigate={navigate} />
      ))}
    </div>
  );
});

SearchResult.Item = SearchItem;
SearchResult.displayName = '@v2/Search.Result';
