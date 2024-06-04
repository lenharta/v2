import { Core } from '@/types';

type AccordionCSS = Record<'root' | 'item' | 'panel' | 'target' | 'iconbox' | 'labelbox', string>;

type AccordionValue<Multiple> = Multiple extends true ? string[] : string | null;
type AccordionVariant = 'default' | 'elevated';

interface AccordionContext<Multiple extends boolean = false> {
  getRootId: (id: string) => string;
  getPanelId: (id: string) => string;
  getTargetId: (id: string) => string;
  onValueChange: (value: AccordionValue<Multiple>) => void;
  isValueActive: (value: string) => boolean;
  variant: AccordionVariant | undefined;
  disabled?: boolean | undefined;
  children?: React.ReactNode | undefined;
  trapFocus?: boolean | undefined;
  chevronPosition: Core.Align;
  chevronRotation?: boolean | undefined;
}

interface AccordionRootProps<V extends boolean = false> {
  value: AccordionValue<V>;
  multiple?: V | undefined;
  chevronRotation?: boolean | undefined;
  chevronPosition?: Core.Align | undefined;
  onValueChange: (value: AccordionValue<V>) => void;
  disabled?: boolean | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
  variant?: AccordionVariant | undefined;
  trapFocus?: boolean | undefined;
}

interface AccordionItemContext {
  value: string;
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
  icon?: React.ReactNode | undefined;
  variant?: AccordionVariant | undefined;
  chevron?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
  trapFocus?: boolean | undefined;
}

export type {
  AccordionCSS,
  AccordionValue,
  AccordionContext,
  AccordionRootProps,
  AccordionItemContext,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionTargetProps,
};
