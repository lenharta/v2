import * as React from 'react';
import { Core } from '@/types';
import { AccordionItem } from './AccordionItem';
import { AccordionPanel } from './AccordionPanel';
import { AccordionTarget } from './AccordionTarget';
import { AccordionRootProvider } from './AccordionContext';

export const Accordion = <Multiple extends boolean = false>({
  value,
  variant = 'default',
  children,
  multiple = false as Multiple,
  trapFocus = false,
  chevronRotation = true,
  chevronPosition = 'end',
  onValueChange,
}: Core.AccordionProps<Multiple>) => {
  const uid = React.useId();
  const isMultiple = (multiple || false) as Multiple;
  const getPanelId = (v: string) => `accordion${uid}${v}:panel`;
  const getTargetId = (v: string) => `accordion${uid}${v}:target`;

  const isValueActive = (v: string): boolean => {
    return Array.isArray(value) ? value.includes(v) : v === value;
  };

  const handleChange = (v: string | null) => {
    const nextValue: Core.AccordionValue<Multiple> = Array.isArray(value)
      ? isMultiple && v && value.includes(v)
        ? value.filter((current) => current !== v)
        : [...value, v]
      : v === value
        ? null
        : (v as any);

    onValueChange(nextValue as Core.AccordionValue<Multiple>);
  };

  return (
    <React.Fragment>
      <AccordionRootProvider
        value={{
          variant,
          trapFocus,
          chevronPosition,
          chevronRotation,
          onValueChange: handleChange,
          isValueActive,
          getTargetId,
          getPanelId,
        }}
      >
        {children}
      </AccordionRootProvider>
    </React.Fragment>
  );
};

Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Target = AccordionTarget;
Accordion.displayName = '@v2/Accordion';
