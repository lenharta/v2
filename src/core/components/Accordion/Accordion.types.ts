import { Core, Theme } from '@/types';

type AccordionValue<V> = V extends true ? string[] : string | null;

interface AccordionItemContext {
  value: string;
}

interface AccordionContext<V extends boolean = false> {
  size?: Theme.SizeRegular | undefined;
  variant?: 'default' | 'accent' | undefined;
  disabled?: boolean | undefined;
  children?: React.ReactNode | undefined;
  trapFocus?: boolean | undefined;
  chevronPosition: Core.Align;
  chevronRotation?: boolean | undefined;
  getRootId: (id: string) => string;
  getPanelId: (id: string) => string;
  getTargetId: (id: string) => string;
  onValueChange: (value: AccordionValue<V>) => void;
  isValueActive: (value: string) => boolean;
}

interface AccordionProps<V extends boolean = false> {
  value: AccordionValue<V>;
  multiple?: V | undefined;
  size?: Theme.SizeRegular | undefined;
  variant?: 'default' | 'accent' | undefined;
  disabled?: boolean | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
  trapFocus?: boolean | undefined;
  chevronRotation?: boolean | undefined;
  chevronPosition?: Core.Align | undefined;
  onValueChange: (value: AccordionValue<V>) => void;
}

interface AccordionItemProps {
  value: string;
  children?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  className?: string | undefined;
}

interface AccordionPanelProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

interface AccordionTargetProps {
  size?: Theme.SizeRegular | undefined;
  icon?: React.ReactNode | undefined;
  variant?: 'default' | 'accent' | undefined;
  chevron?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
  trapFocus?: boolean | undefined;
}

export type {
  AccordionValue,
  AccordionItemContext,
  AccordionContext,
  AccordionProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionTargetProps,
};
