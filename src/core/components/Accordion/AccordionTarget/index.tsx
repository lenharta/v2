import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { createEventCallback } from '@/utils';
import { Icon, UnstyledButton } from '@/core';
import { AccordionTargetProps } from '../types';
import { useAccordionContext, useAccordionItemContext } from '../context';

type AccordionTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: AccordionTargetProps;
}>;

const AccordionTarget = createFactory<AccordionTargetFactory>((props, ref) => {
  const {
    icon,
    chevron = <Icon name="arrow-southeast" />,
    disabled,
    children,
    className,
    onClick,
    ...forwardedProps
  } = props;

  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();

  const handleChange = () => ctx.onValueChange(value);
  const handleClick = createEventCallback(onClick, handleChange);

  const contentProps = {
    className: 'v2-accordion-target-content',
    'data-active': ctx.isValueActive(value),
  };

  return (
    <UnstyledButton
      ref={ref}
      id={ctx.getTargetId(value)}
      onClick={handleClick}
      disabled={disabled || ctx.disabled}
      aria-controls={ctx.getPanelId(value)}
      aria-expanded={ctx.isValueActive(value)}
      data-expanded={ctx.isValueActive(value)}
      className={clsx('v2-accordion-target', className)}
      {...forwardedProps}
    >
      <div {...contentProps} data-position="start">
        {(ctx.chevronPosition === 'start' ? chevron : icon) ?? null}
      </div>

      <div className="v2-accordion-target-label">{children}</div>

      <div {...contentProps} data-position="end">
        {(ctx.chevronPosition === 'end' ? chevron : icon) ?? null}
      </div>
    </UnstyledButton>
  );
});

AccordionTarget.displayName = '@v2/Accordion.Target';
export { AccordionTarget };
