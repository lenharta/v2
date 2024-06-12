import {
  SelectItem,
  SelectItemGroup,
  ParsedSelectItem,
  ParsedSelectItemGroup,
} from '../selectbox-types';

function parseSelectItem(
  item: string | SelectItem | SelectItemGroup
): ParsedSelectItem | ParsedSelectItemGroup {
  if (typeof item === 'string') {
    return {
      value: item,
      label: item,
      disabled: undefined,
    };
  }

  if (!('label' in item) && !('group' in item)) {
    return {
      ...item,
      value: item.value,
      label: item.value,
    };
  }

  if ('group' in item) {
    return {
      group: item.group,
      items: item.items.map(parseSelectItem) as (ParsedSelectItem | ParsedSelectItemGroup)[],
    };
  }

  return item as ParsedSelectItem;
}

function parseSelectData(
  data?: (string | SelectItem | SelectItemGroup)[] | undefined
): (ParsedSelectItem | ParsedSelectItemGroup)[] {
  return !data ? [] : data.map(parseSelectItem);
}

export { parseSelectItem, parseSelectData };
