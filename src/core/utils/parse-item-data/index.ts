import { Core } from '@/types';

export function parseItem(item: Core.ItemInput): Core.ItemParsedOutput {
  if (typeof item === 'number' || typeof item === 'string') {
    return {
      value: (item as number).toString(),
      label: (item as number).toString(),
    };
  }

  if ('group' in item) {
    return {
      group: item.group,
      items: item.items.map(parseItem),
    };
  }

  if (item.value && !item.label) {
    return {
      ...item,
      value: (item.value as number).toString(),
      label: (item.value as number).toString(),
    };
  }

  return {
    ...item,
    value: (item.value as number).toString(),
    label: (item.label as number).toString(),
  };
}

export function parseItemData(data?: Core.ItemInput[]): Core.ItemParsedOutput[] {
  return !data ? [] : data.map(parseItem);
}
