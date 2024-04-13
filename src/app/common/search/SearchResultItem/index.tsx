import { ICON, Icon, Text } from '@/core';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

interface SearchResultItemProps {
  icon: ICON;
  title: string;
  description: string;
}

export type SearchResultItemFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SearchResultItemProps;
}>;

export const SearchResultItem = factory<SearchResultItemFactory>((props, ref) => {
  const { icon, title, description, ...otherProps } = props;
  return (
    <button {...otherProps} ref={ref} role="menuitem" className="search-result-item">
      <Icon name={icon} />
      <div className="search-result-item-copy">
        <Text data-truncate>{title}</Text>
        <Text data-truncate>{description}</Text>
      </div>
    </button>
  );
});

SearchResultItem.displayName = '@v2/SearchResult.Item';
