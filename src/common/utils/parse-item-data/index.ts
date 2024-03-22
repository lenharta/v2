export interface ItemObj {
  value: string | number;
  label?: string | number | undefined;
  disabled?: boolean | undefined;
}

export interface ItemObjParsed {
  value: string;
  label: string;
  disabled?: boolean;
}

export function parseItem(item: ItemObj): ItemObjParsed {
  if (!item.label) {
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

export function parseItemData(data?: ItemObj[] | undefined): ItemObjParsed[] {
  return !data ? [] : data.map(parseItem);
}
