import { Core, Theme } from '@/types';

type AccordionValue<V> = V extends true ? string[] : string | null;

interface AccordionThemeProps {
  variant?:
    | 'base-default'
    | 'base-elevated'
    | 'accent-default'
    | 'accent-elevated'
    | 'accent-tonal'
    | 'accent-ghost'
    | `${Theme.Color}-tonal`
    | `${Theme.Color}-ghost`
    | `${Theme.Color}-default`
    | `${Theme.Color}-elevated`
    | undefined;
}

interface AccordionItemContext extends AccordionThemeProps {
  value: string;
}

interface AccordionContext<V extends boolean = false> extends AccordionThemeProps {
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

interface AccordionProps<V extends boolean = false> extends AccordionThemeProps {
  value: AccordionValue<V>;
  multiple?: V | undefined;
  disabled?: boolean | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
  trapFocus?: boolean | undefined;
  chevronRotation?: boolean | undefined;
  chevronPosition?: Core.Align | undefined;
  onValueChange: (value: AccordionValue<V>) => void;
}

interface AccordionItemProps extends AccordionThemeProps {
  value: string;
  children?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  className?: string | undefined;
}

interface AccordionPanelProps extends AccordionThemeProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

interface AccordionTargetProps extends AccordionThemeProps {
  icon?: React.ReactNode | undefined;
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
