import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { createEventCallback } from '@/utils';
import { Icon, Label, UnstyledButton } from '@/core';
import { useAccordionRootCTX, useAccordionItemCTX } from '../AccordionContext';

type AccordionTargetFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.AccordionTargetProps;
  element: 'button';
  elements: {
    Icon: React.FC<Core.AccordionTargetIconProps>;
  };
}>;

export const AccordionTarget = Component<AccordionTargetFactory>(
  (
    {
      size,
      variant,
      chevron,
      children,
      className,
      isLoading,
      isReadonly,
      isDisabled,
      component: Component = UnstyledButton,
      onKeyDown,
      onClick,
      ...props
    },
    ref
  ) => {
    const rootContext = useAccordionRootCTX();
    const itemContext = useAccordionItemCTX();

    const loading = isLoading || itemContext.isLoading || rootContext.isLoading || undefined;
    const disabled = isDisabled || itemContext.isDisabled || rootContext.isDisabled || undefined;
    const readonly = isReadonly || itemContext.isReadonly || rootContext.isReadonly || undefined;

    return (
      <Component
        {...props}
        ref={ref}
        id={rootContext.getTargetId(itemContext.value)}
        isLoading={loading}
        isDisabled={disabled}
        isReadonly={readonly}
        aria-expanded={rootContext.isValueActive(itemContext.value)}
        aria-controls={rootContext.getPanelId(itemContext.value)}
        onClick={createEventCallback(onClick, (event) => {
          if (!loading && !disabled && !readonly) {
            event.stopPropagation();
            rootContext.onChange(itemContext.value);
          }
        })}
        onKeyDown={createEventCallback(onKeyDown, (event) => {
          if (event.key === 'Enter') {
            event.stopPropagation();
            event.preventDefault();

            if (!loading && !disabled && !readonly) {
              rootContext.onChange(itemContext.value);
            }
          }
        })}
        className={clsx(
          `v2-accordion-target`,
          `v2-accordion-target--${size || itemContext.size || rootContext.size || 'sm'}`,
          `v2-accordion-target--${variant || itemContext.variant || rootContext.variant || 'default'}`,
          className
        )}
      >
        <span className="v2-accordion-target-layout">
          <AccordionTarget.Icon
            position="start"
            active={rootContext.isValueActive(itemContext.value)}
            chevronPosition={rootContext.chevronPosition}
            chevronRotation={rootContext.chevronRotation}
            className="v2-accordion-target-content"
            chevron={chevron}
          />

          <Label component="div">{children}</Label>

          <AccordionTarget.Icon
            position="end"
            active={rootContext.isValueActive(itemContext.value)}
            chevronPosition={rootContext.chevronPosition}
            chevronRotation={rootContext.chevronRotation}
            className="v2-accordion-target-content"
            chevron={chevron}
          />
        </span>
      </Component>
    );
  }
);

AccordionTarget.Icon = ({
  active,
  chevron,
  position,
  className,
  chevronPosition,
  chevronRotation,
}) => {
  if (chevronPosition === position) return null;
  const defaultIcon = chevronPosition === 'start' ? 'caret-west' : 'caret-east';
  return (
    <div
      className={className}
      data-active={!!active}
      data-rotate={!!chevronRotation}
      data-position={chevronPosition}
    >
      {chevron ?? <Icon name={defaultIcon} /> ?? null}
    </div>
  );
};

AccordionTarget.displayName = '@v2/Accordion.Target';
