import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { createEventCallback } from '@/utils';
import { Icon, UnstyledButton } from '@/core';
import { useAccordionRootCTX, useAccordionItemCTX } from '../AccordionContext';

type AccordionTargetFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.AccordionTargetProps;
  element: 'button';
  elements: {
    Icon: React.FC<Core.AccordionTargetIconProps>;
  };
}>;

const css = {
  root: 'v2-accordion-target',
  icon: 'v2-accordion-target-icon',
  label: 'v2-accordion-target-label',
  layout: 'v2-accordion-target-layout',
};

export const AccordionTarget = Component<AccordionTargetFactory>(
  ({ chevron, variant = 'default', disabled, children, className, onClick, ...props }, ref) => {
    const rootContext = useAccordionRootCTX();
    const itemContext = useAccordionItemCTX();

    const itemVariant = variant || itemContext.variant || rootContext.variant;
    const handleChange = () => rootContext.onValueChange(itemContext.value);
    const handleClick = createEventCallback(onClick, handleChange);

    const accessibleProps = {
      id: rootContext.getTargetId(itemContext.value),
      disabled: disabled || rootContext.disabled || undefined,
      'aria-expanded': rootContext.isValueActive(itemContext.value),
      'aria-controls': rootContext.getPanelId(itemContext.value),
    };

    return (
      <UnstyledButton
        {...props}
        {...accessibleProps}
        className={clsx(css.root, `${css.root}--${itemVariant}`, className)}
        onClick={handleClick}
        ref={ref}
      >
        <span className={css.layout}>
          <AccordionTarget.Icon
            active={rootContext.isValueActive(itemContext.value)}
            chevronPosition={rootContext.chevronPosition}
            chevronRotation={rootContext.chevronRotation}
            className={css.icon}
            chevron={chevron}
          />

          <div className={css.label}>{children}</div>

          <AccordionTarget.Icon
            active={rootContext.isValueActive(itemContext.value)}
            chevronPosition={rootContext.chevronPosition}
            chevronRotation={rootContext.chevronRotation}
            className={css.icon}
            chevron={chevron}
          />
        </span>
      </UnstyledButton>
    );
  }
);

AccordionTarget.Icon = ({ active, chevron, className, chevronPosition, chevronRotation }) => {
  if (!chevronPosition) return null;
  return (
    <div
      className={className}
      data-active={!!active}
      data-rotate={!!chevronRotation}
      data-position={chevronPosition}
    >
      {chevron ?? <Icon name="caret-west" /> ?? null}
    </div>
  );
};

AccordionTarget.displayName = '@v2/Accordion.Target';
