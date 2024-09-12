import { ICON, Store } from '@/types';
import { StackTableItem } from '..';
import { Icon } from '@/core';

export const StackTableHeadControl = (props: {
  item: { value: keyof StackTableItem; label: string };
  store: Partial<Store.State>;
  order: 'ascending' | 'descending' | undefined;
  active: keyof StackTableItem | undefined;
  className: string;
  isActive: (prop: keyof StackTableItem) => boolean;
  setAscending: (prop: keyof StackTableItem) => void;
  setDescending: (prop: keyof StackTableItem) => void;
}) => {
  const { item, store, order, isActive, className, setAscending, setDescending } = props;

  let actionIcon: ICON.Name = 'arrow-down-up';

  if (order === 'ascending') {
    actionIcon = 'caret-north';
  }
  if (order === 'descending') {
    actionIcon = 'caret-south';
  }

  return (
    <th
      tabIndex={0}
      onClick={(event) => {
        event.stopPropagation();
        if (order === 'ascending') {
          return setDescending(item.value);
        } else {
          return setAscending(item.value);
        }
      }}
      onKeyDown={(event) => {
        event.stopPropagation();
        if (event.key === 'Enter') {
          if (order === 'ascending') {
            return setDescending(item.value);
          } else {
            return setAscending(item.value);
          }
        }
      }}
      className={className}
      data-table-column={item.value}
      data-table-control-active={isActive(item.value) || undefined}
      data-table-control
    >
      <span>{item.label}</span>
      <Icon name={actionIcon} type={store.icons} />
    </th>
  );
};
