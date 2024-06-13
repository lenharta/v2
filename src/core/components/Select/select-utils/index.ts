import {
  ParsedSelectGroupItem,
  ParsedSelectItem,
  SelectGroupItem,
  SelectItem,
} from '../select-types';

function parseSelectItem(
  item: string | SelectItem | SelectGroupItem
): ParsedSelectItem | ParsedSelectGroupItem {
  if (typeof item === 'string') {
    return {
      label: item as string,
      value: item as string,
    };
  }

  if ('value' in item && !('label' in item)) {
    return {
      ...item,
      value: item.value as string,
      label: item.value as string,
    };
  }

  if ('value' in item && 'label' in item) {
    return {
      ...item,
      value: item.value as string,
      label: item.label as string,
    };
  }

  if (typeof item !== 'string' && 'group' in item) {
    return {
      ...item,
      group: item.group as string,
      items: item.items.map(parseSelectItem) as ParsedSelectItem[],
    };
  }

  return {
    ...item,
    value: item.value as string,
    label: item.label as string,
  };
}

function parseSelectData(
  data?: (string | SelectItem | SelectGroupItem)[] | undefined
): (ParsedSelectItem | ParsedSelectGroupItem)[] {
  return !data ? [] : data.map(parseSelectItem);
}

export { parseSelectItem, parseSelectData };
