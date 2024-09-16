import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types';
import { AccordionItem } from './AccordionItem';
import { AccordionPanel } from './AccordionPanel';
import { AccordionTarget } from './AccordionTarget';
import { AccordionRootProvider } from './AccordionContext';

export const Accordion = <Multiple extends boolean = false>({
  size,
  value,
  variant,
  multiple = false as Multiple,
  children,
  trapFocus = false,
  isLoading,
  isReadonly,
  isDisabled,
  chevronRotation = true,
  chevronPosition = 'end',
  className,
  onChange,
  ...props
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

    onChange(nextValue as Core.AccordionValue<Multiple>);
  };

  return (
    <AccordionRootProvider
      value={{
        size,
        variant,
        trapFocus,
        isLoading,
        isDisabled,
        isReadonly,
        chevronPosition,
        chevronRotation,
        onChange: handleChange,
        isValueActive,
        getTargetId,
        getPanelId,
      }}
    >
      <div {...props} className={clsx('v2-accordion', className)}>
        {children}
      </div>
    </AccordionRootProvider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Target = AccordionTarget;
Accordion.displayName = '@v2/Accordion';
