import clsx from 'clsx';
import { Factory } from '@/types';
import { Icon, Icons, Text, UnstyledButton, factory } from '@/core';

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
  props: SearchItemProps;
}>;

const SearchItem = factory<SearchItemFactory>((props, ref) => {
  const { className, label, icon = 'document', description, ...forwardedProps } = props;
  return (
    <UnstyledButton {...forwardedProps} className={clsx('v2-search-item', className)} ref={ref}>
      <span className="v2-search-item-inner">
        <Icon name={icon} />
        <div>
          {<Text className="v2-search-item-label">{label}</Text>}
          {<Text className="v2-search-item-description">{description}</Text>}
        </div>
        <Icon name="arrowNorthEast" />
      </span>
    </UnstyledButton>
  );
});

SearchItem.displayName = '@v2/Search.Result';
export { SearchItem, type SearchItemProps };
