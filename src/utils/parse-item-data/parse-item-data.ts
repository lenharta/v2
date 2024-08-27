import { Core } from '@/types';

function parseItem(
  item: string | Core.Item | Core.ItemGroup
): Core.ItemParsed | Core.ItemGroupParsed {
  if (typeof item === 'string') {
    return {
      value: item.toString(),
      label: item.toString(),
    };
  }

  if ('value' in item && !('label' in item)) {
    return {
      ...item,
      value: item.value.toString(),
      label: item.value.toString(),
    };
  }

  if ('group' in item) {
    return {
      group: item.group,
      items: item.items.map((i) => parseItem(i)),
    };
  }

  return item as Core.ItemParsed;
}

function parseItemData(
  data?: (string | Core.Item | Core.ItemGroup)[]
): (Core.ItemParsed | Core.ItemGroupParsed)[] {
  if (!data) return [];
  return data.map((i) => parseItem(i));
}

export { parseItem, parseItemData };
