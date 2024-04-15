import { ICON, Icon, Text } from '@/core';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

interface SearchResultItemProps {
  url: string;
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
  const { url, icon, title, description, onKeyDown, onClick, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      ref={ref}
      role="listitem"
      value={url}
      className="search-result-item"
      onKeyDown={onKeyDown}
      onClick={onClick}
    >
      <Icon name={icon} />
      <div className="search-result-item-copy">
        <Text data-truncate>{title}</Text>
        <Text data-truncate>{description}</Text>
      </div>
    </button>
  );
});

SearchResultItem.displayName = '@v2/SearchResult.Item';
