type SelectItem = {
  value: string;
  label?: string | undefined;
  disabled?: boolean | undefined;
};

type SelectItemGroup = {
  group: string;
  items: (string | SelectItem | SelectItemGroup)[];
};

type ParsedSelectItem = {
  value: string;
  label: string;
  disabled?: boolean | undefined;
};

type ParsedSelectItemGroup = {
  group: string;
  items: (ParsedSelectItem | ParsedSelectItemGroup)[];
};

type SelectItemData = string | SelectItem | SelectItemGroup;
type ParsedSelectItemData = ParsedSelectItem | ParsedSelectItemGroup;

export type {
  SelectItem,
  SelectItemGroup,
  ParsedSelectItem,
  ParsedSelectItemGroup,
  SelectItemData,
  ParsedSelectItemData,
};
