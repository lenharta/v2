type AccordionChevronPosition = 'left' | 'right';
type AccordionValue<Multiple> = Multiple extends true ? string[] : string | null;

interface AccordionContext<Multiple extends boolean = false> {
  getPanelId: (id: string) => string;
  getTargetId: (id: string) => string;
  onValueChange: (value: AccordionValue<Multiple>) => void;
  isValueActive: (value: string) => boolean;
  chevronPosition: AccordionChevronPosition;
  trapFocus?: boolean | undefined;
}

interface AccordionProps<Multiple extends boolean = false> {
  value: AccordionValue<Multiple>;
  children: React.ReactNode;
  trapFocus?: boolean | undefined;
  multiple?: Multiple | undefined;
  chevronPosition?: AccordionChevronPosition | undefined;
  onValueChange: (value: AccordionValue<Multiple>) => void;
}

interface AccordionItemContext {
  value: string;
}

interface AccordionItemProps {
  value: string;
}

interface AccordionPanelProps {}

interface AccordionTargetProps {
  icon?: React.ReactNode | undefined;
  chevron?: React.ReactNode | undefined;
  children?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
}

export type {
  AccordionValue,
  AccordionProps,
  AccordionContext,
  AccordionItemContext,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionTargetProps,
  AccordionChevronPosition,
};

// type AccordionValue<MultiSelect extends boolean> = MultiSelect extends true
//   ? string[]
// //   : string | null;

// interface AccordionContext<MultiSelect extends boolean = false> {
//   activeValue: AccordionValue<MultiSelect>;
//   getPanelId: (value: string) => string;
//   getTargetId: (value: string) => string;
//   isActiveValue: (itemValue: string | null | (string | null)[]) => boolean;
//   onValueChange: (itemValue: string | null | (string | null)[]) => void;
// }

// interface AccordionProps<MultiSelect extends boolean = false> {
//   value: AccordionValue<MultiSelect>;
//   children: React.ReactNode;
//   multiselect?: MultiSelect | undefined;
//   onValueChange: (value: AccordionValue<MultiSelect>) => void;
// }

// interface AccordionItemProps {
//   chevron?: React.ReactNode;
//   trapFocus?: boolean | undefined;
//   chevronPosition?: AccordionChevronPosition | undefined;
//   transitionDuration?: number | undefined;
//   item: {
//     value: string;
//     label: string;
//     disabled?: boolean | undefined;
//   };
// }

// interface AccordionPanelProps {}

// interface AccordionTargetProps {
//   // id?: string | undefined;
//   // 'aria-disabled'?: boolean | undefined;
//   // 'data-disabled'?: boolean | undefined;
//   // 'aria-expanded'?: React.AriaAttributes['aria-expanded'] | undefined;
//   // 'aria-controls'?: React.AriaAttributes['aria-controls'] | undefined;
// }

// export type {
//   AccordionValue,
//   AccordionProps,
//   AccordionContext,
//   AccordionItemProps,
//   AccordionPanelProps,
//   AccordionTargetProps,
//   AccordionChevronPosition,
// };
