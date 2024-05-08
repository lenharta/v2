import { cx } from '@/app/utils';
import { factory } from '@/core/factory';
import { Icon, Text } from '@/core';
import { Factory, Site } from '@/types';
import { createEventCallback } from '@/utils';

interface SearchItemProps extends Site.SearchItem {
  navigate: (url: string) => void;
}

type SearchItemFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: SearchItemProps;
}>;

export const SearchItem = factory<SearchItemFactory>((props, ref) => {
  const { id, icon, keywords, name, value, description, navigate, ...forwardedProps } = props;
  return (
    <button
      {...forwardedProps}
      id={id}
      ref={ref}
      value={value}
      className={cx('search-item')}
      onClick={createEventCallback(forwardedProps.onClick, (event) => {
        return navigate(event.currentTarget.value);
      })}
    >
      <span className={cx('search-item-inner')}>
        {icon && <Icon name={icon} />}

        <div className={cx('search-item-copy')}>
          {name && <Text>{name}</Text>}
          {description && <Text>{description}</Text>}
        </div>
      </span>
    </button>
  );
});

SearchItem.displayName = '@v2/Search.Item';
