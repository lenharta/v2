import clsx from 'clsx';
import React from 'react';
import { Box } from '@/core/components';

import { AccordionItem } from './AccordionItem';
import { AccordionPanel } from './AccordionPanel';
import { AccordionTarget } from './AccordionTarget';
import { AccordionProvider } from './Accordion.context';
import { AccordionRootCSS, AccordionRootProps, AccordionValue } from './types';

const css: AccordionRootCSS = {
  root: 'v2-accordion-root',
};

const Accordion = <Multiple extends boolean = false>(props: AccordionRootProps<Multiple>) => {
  const {
    value,
    children,
    elevated,
    multiple = false,
    trapFocus = false,
    className,
    chevronRotation = true,
    chevronPosition = 'end',
    onValueChange,
  } = props;

  const classNames = clsx(
    css.root,
    {
      [`${css.root}--default`]: !elevated,
      [`${css.root}--elevated`]: elevated,
    },
    className
  );

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
    <AccordionProvider
      value={{
        elevated,
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
      <Box id={getRootId()} className={classNames} data-accordion-root>
        {children}
      </Box>
    </AccordionProvider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Target = AccordionTarget;
Accordion.displayName = '@v2/Accordion';
export { Accordion };
