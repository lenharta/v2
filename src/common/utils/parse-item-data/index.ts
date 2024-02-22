export interface OptionItem<T> {
  value: T;
  label?: string;
  disabled?: boolean;
}

export function parseItem<T extends string>(item: T | OptionItem<T>) {
  if (typeof item === 'string' || typeof item === 'number') {
    return {
      value: item,
      label: item,
    };
  }

  if (!('label' in item)) {
    return {
      label: item.value,
      value: item.value,
      disabled: item.disabled,
    };
  }

  return item;
}

export function parseItemData<T extends string>(data?: T[] | OptionItem<T>[]) {
  if (!data) return [];
  return data.map((option) => parseItem<T>(option));
}
