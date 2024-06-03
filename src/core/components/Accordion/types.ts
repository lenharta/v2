import { Core } from '@/types';

type AccordionRootClasses = 'root';
type AccordionItemClasses = 'root';
type AccordionPanelClasses = 'root';
type AccordionTargetClasses = 'root' | 'inner' | 'iconbox' | 'contentbox';

type AccordionRootCSS = Record<AccordionRootClasses, string>;
type AccordionItemCSS = Record<AccordionItemClasses, string>;
type AccordionPanelCSS = Record<AccordionPanelClasses, string>;
type AccordionTargetCSS = Record<AccordionTargetClasses, string>;

type AccordionValue<Multiple> = Multiple extends true ? string[] : string | null;
type AccordionChevronPosition = Core.Align;

interface AccordionBaseProps {
  className?: string | undefined;
}

interface AccordionSharedProps extends AccordionBaseProps {
  elevated?: boolean | undefined;
  trapFocus?: boolean | undefined;
}

interface AccordionContext<Multiple extends boolean = false> extends AccordionSharedProps {
  getRootId: (id: string) => string;
  getPanelId: (id: string) => string;
  getTargetId: (id: string) => string;
  onValueChange: (value: AccordionValue<Multiple>) => void;
  isValueActive: (value: string) => boolean;
  chevronPosition: AccordionChevronPosition;
  chevronRotation?: boolean | undefined;
}

interface AccordionRootProps<V extends boolean = false> extends AccordionSharedProps {
  value: AccordionValue<V>;
  children: React.ReactNode;
  multiple?: V | undefined;
  elevated?: boolean | undefined;
  className?: string | undefined;
  chevronRotation?: boolean | undefined;
  chevronPosition?: AccordionChevronPosition | undefined;
  onValueChange: (value: AccordionValue<V>) => void;
}

interface AccordionItemContext {
  value: string;
}

interface AccordionItemProps extends AccordionBaseProps {
  value: string;
}

interface AccordionPanelProps extends AccordionBaseProps {
  children: React.ReactNode;
}

interface AccordionTargetProps {
  icon?: React.ReactNode | undefined;
  chevron?: React.ReactNode | undefined;
  children?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
}

export type {
  AccordionRootClasses,
  AccordionItemClasses,
  AccordionPanelClasses,
  AccordionTargetClasses,
  AccordionRootCSS,
  AccordionItemCSS,
  AccordionPanelCSS,
  AccordionTargetCSS,
  AccordionValue,
  AccordionContext,
  AccordionRootProps,
  AccordionItemContext,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionTargetProps,
  AccordionChevronPosition,
};
