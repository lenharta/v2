import { Core } from '@/types';

export function parseItem(
  item: string | Core.Item | Core.ItemGroup
): Core.ItemParsed | Core.ItemGroupParsed {
  if (typeof item === 'string') {
    return {
      value: item,
      label: item,
    };
  }

  if ('value' in item && !('label' in item)) {
    return {
      value: item.value,
      label: item.value,
      disabled: item.disabled,
    };
  }

  if ('group' in item) {
    return {
      group: item.group,
      items: item.items.map((i) => parseItem(i)),
    };
  }

  return {
    value: item.value,
    label: item.label as string,
    disabled: item.disabled,
  };
}
