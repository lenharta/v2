import React from 'react';
import { SearchResultItemProps } from '../search-types';
import { SEARCH_CSS } from '../search-constants';
import { Icon, Text } from '@/core';

type SearchResultItemFactory = React.FC<SearchResultItemProps> & {};

const SearchResultItem: SearchResultItemFactory = (props) => {
  const { tags = [], icon, text, value, label, scheme, variant, disabled, navigate } = props;

  return (
    <button
      value={value}
      onClick={(event) => navigate(event.currentTarget.value)}
      className={SEARCH_CSS.item}
      aria-label={label}
      aria-disabled={disabled}
      data-scheme={scheme}
      data-variant={variant}
      data-disabled={disabled}
    >
      <Icon name={icon} style={{ fill: 'var(--c-accent)' }} />
      <Text>{label}</Text>
    </button>
  );
};

SearchResultItem.displayName = '@v2/Search.Result.Item';
export { SearchResultItem };
