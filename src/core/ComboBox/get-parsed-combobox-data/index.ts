import { Core } from '@/types';

interface ComboboxItem {
  value: string | number;
  label?: string | number;
  disabled?: boolean;
}

interface ComboboxItemParsed {
  value: string;
  label: string;
  disabled?: boolean;
}

interface ComboboxItemGroup {
  group: string;
  items: (string | ComboboxItem | ComboboxItemGroup)[];
}

interface ComboboxItemGroupParsed {
  group: string;
  items: (ComboboxItemParsed | ComboboxItemGroupParsed)[];
}

export function getParsedComboBoxItem(
  item: string | ComboboxItem | ComboboxItemGroup
): ComboboxItemParsed | ComboboxItemGroupParsed {
  if (typeof item === 'string') {
    return {
      value: item.toString(),
      label: item.toString(),
    };
  }

  if (typeof item === 'number') {
    return {
      value: (item as number).toString(),
      label: (item as number).toString(),
    };
  }

  if ('value' in item && !('label' in item)) {
    return {
      value: (item.value as number).toString(),
      label: (item.value as number).toString(),
      disabled: item.disabled,
    };
  }

  if ('group' in item) {
    return {
      group: item.group,
      items: item.items.map((i) => getParsedComboBoxItem(i) as ComboboxItemParsed),
    };
  }

  return item as Core.ComboboxItemParsed;
}

export function getParsedComboBoxData(
  data: (string | ComboboxItem | ComboboxItemGroup)[]
): (ComboboxItemParsed | ComboboxItemGroupParsed)[] {
  if (!data) return [];
  return data.map((i) => getParsedComboBoxItem(i));
}
