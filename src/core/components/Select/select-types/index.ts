import { Store } from '@/types';
import { DividerProps, FloatingProps } from '@/core';

type SelectItem = {
  value: string;
  label?: string | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
};

type SelectGroupItem = {
  group: string;
  items: (string | SelectItem)[];
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
};

type ParsedSelectItem = {
  value: string;
  label: string;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
};

type ParsedSelectGroupItem = {
  group: string;
  items: ParsedSelectItem[];
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
};

interface SelectContextValue {
  value: string[];
  scheme: 'default' | 'accent';
  variant: 'default' | 'elevated';
  behavior?: 'single' | 'multiple' | undefined;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
  maxHeight?: React.CSSProperties['maxHeight'] | undefined;
  withDivider?: boolean | undefined;
  dividerProps?: DividerProps | undefined;
  onChange: (value: string[]) => void;
  getOptionId: () => string;
  getGroupId: () => string;
}

interface SelectProps {
  dir?: Store.State['dir'] | undefined;
  data?: (string | SelectItem | SelectGroupItem)[] | undefined;
  value: string[];
  width?: FloatingProps['width'] | undefined;
  offset?: FloatingProps['offset'] | undefined;
  zIndex?: FloatingProps['zIndex'] | undefined;
  scheme?: 'default' | 'accent' | undefined;
  variant?: 'default' | 'elevated' | undefined;
  behavior?: 'single' | 'multiple' | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  maxHeight?: React.CSSProperties['maxHeight'] | undefined;
  placement?: FloatingProps['placement'];
  middleware?: FloatingProps['middleware'] | undefined;
  placeholder?: string | undefined;
  defaultOpen?: boolean | undefined;
  withDivider?: boolean | undefined;
  dividerProps?: DividerProps | undefined;
  placementDependencies?: FloatingProps['placementDependencies'] | undefined;
  onPlacementChange?: FloatingProps['onPlacementChange'] | undefined;
  onChange: (value: string[]) => void;
  onClose?: (() => void) | undefined;
  onOpen?: (() => void) | undefined;
}

interface SelectOptionProps {
  label: string;
  value: string;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
}

interface SelectBoxProps {
  children?: React.ReactNode | undefined;
}

interface SelectTargetProps {
  placeholder: string;
  findOptionLabel: (value: string) => string;
}

interface SelectGroupProps {
  group: string;
  items: ParsedSelectItem[];
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
}

interface SelectLabelProps {
  type?: 'option' | 'group' | 'target' | undefined;
  value: string;
}

export type {
  SelectItem,
  SelectGroupItem,
  ParsedSelectItem,
  ParsedSelectGroupItem,
  SelectProps,
  SelectBoxProps,
  SelectGroupProps,
  SelectLabelProps,
  SelectOptionProps,
  SelectTargetProps,
  SelectContextValue,
};
