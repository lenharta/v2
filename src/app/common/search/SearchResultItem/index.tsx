import { ICON, Icon, Text } from '@/core';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import { createEventCallback } from '@/utils';

interface SearchResultItemProps {
  icon: ICON;
  title: string;
  description: string;
  onEscape: () => void;
}

export type SearchResultItemFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SearchResultItemProps;
}>;

export const SearchResultItem = factory<SearchResultItemFactory>((props, ref) => {
  const { icon, title, description, onEscape, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      ref={ref}
      className="search-result-item"
      role="menuitem"
      onKeyDown={createEventCallback(otherProps.onKeyDown, (event) => {
        event.stopPropagation();
        if (event.key === 'Escape') onEscape();
      })}
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
