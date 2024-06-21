import clsx from 'clsx';
import * as React from 'react';
import { AccordionItem } from './AccordionItem';
import { AccordionPanel } from './AccordionPanel';
import { AccordionTarget } from './AccordionTarget';
import { AccordionProvider } from './Accordion.context';
import { AccordionProps, AccordionValue } from './Accordion.types';

const Accordion = <Multiple extends boolean = false>(props: AccordionProps<Multiple>) => {
  const {
    size,
    value,
    variant = 'default',
    children,
    multiple = false,
    trapFocus = false,
    className,
    chevronRotation = true,
    chevronPosition = 'end',
    onValueChange,
  } = props;

  const uid = React.useId();

  const getRootId = () => `accordion${uid}:root`;
  const getPanelId = (v: string) => `accordion${uid}${v}:panel`;
  const getTargetId = (v: string) => `accordion${uid}${v}:target`;

  const isValueActive = (v: string): boolean => {
    return Array.isArray(value) ? value.includes(v) : v === value;
  };

  const handleChange = (v: string | null) => {
    const nextValue: AccordionValue<Multiple> = Array.isArray(value)
      ? multiple && v && value.includes(v)
        ? value.filter((current) => current !== v)
        : [...value, v]
      : v === value
        ? null
        : (v as any);

    onValueChange(nextValue as AccordionValue<Multiple>);
  };

  return (
    <div
      id={getRootId()}
      className={clsx(
        'v2-accordion',
        `v2-accordion--size-${size}`,
        `v2-accordion--variant-${variant}`,
        className
      )}
    >
      <AccordionProvider
        value={{
          variant,
          trapFocus,
          chevronRotation,
          chevronPosition,
          onValueChange: handleChange,
          isValueActive,
          getTargetId,
          getPanelId,
          getRootId,
        }}
      >
        {children}
      </AccordionProvider>
    </div>
  );
};

Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Target = AccordionTarget;
Accordion.displayName = '@v2/Accordion';
export { Accordion };
