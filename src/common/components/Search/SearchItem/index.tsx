import clsx from 'clsx';
import { Factory } from '@/types';
import { Icon, Icons, Text, UnstyledButton, createKeyDownGroup, factory } from '@/core';

interface SearchItemProps {
  label: string;
  value: string;
  icon?: keyof typeof Icons | undefined;
  disabled?: boolean | undefined;
  description?: boolean | undefined;
}

type SearchItemFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: SearchItemProps;
}>;

const SearchItem = factory<SearchItemFactory>((props, ref) => {
  const { className, label, icon = 'document', description, ...forwardedProps } = props;
  return (
    <UnstyledButton
      {...forwardedProps}
      ref={ref}
      data-search-result-item
      className={clsx('v2-search-item', className)}
      onKeyDown={createKeyDownGroup({
        onKeyDown: forwardedProps.onKeyDown,
        parentSelector: '[data-search-result-box]',
        childSelector: '[data-search-result-item]',
        orientation: 'vertical',
        loop: false,
      })}
    >
      <span className="v2-search-item-inner">
        <div
          data-position="start"
          className="v2-search-item-iconbox"
          children={<Icon name={icon} />}
        />

        <div className="v2-search-item-copy">
          {<Text className="v2-search-item-label">{label}</Text>}
          {<Text className="v2-search-item-description">{description}</Text>}
        </div>

        <div
          data-position="end"
          className="v2-search-item-iconbox"
          children={<Icon name="arrowNorthEast" />}
        />
      </span>
    </UnstyledButton>
  );
});

SearchItem.displayName = '@v2/Search.Result';
export { SearchItem, type SearchItemProps };
