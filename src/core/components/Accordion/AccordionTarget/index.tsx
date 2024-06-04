import clsx from 'clsx';
import { Factory } from '@/types';
import { createEventCallback } from '@/utils';
import { factory, Box, Icon, UnstyledButton } from '@/core';
import { AccordionCSS, AccordionTargetProps } from '../types';
import { useAccordionContext, useAccordionItemContext } from '../Accordion.context';

type AccordionTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: AccordionTargetProps;
}>;

const css: Partial<AccordionCSS> = {
  target: 'v2-accordion-target',
  iconbox: 'v2-accordion-iconbox',
  labelbox: 'v2-accordion-labelbox',
};

const AccordionTarget = factory<AccordionTargetFactory>((props, ref) => {
  const {
    icon,
    chevron = <Icon name="caretDown" />,
    variant,
    disabled,
    className,
    children,
    onClick,
    ...forwardedProps
  } = props;

  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();

  const handleChange = () => ctx.onValueChange(value);
  const handleClick = createEventCallback(onClick, handleChange);

  const classNames = clsx(
    css.target,
    {
      [`${css.target}--${variant}`]: variant && !ctx.variant,
      [`${css.target}--${ctx.variant}`]: ctx.variant,
    },
    className
  );

  return (
    <UnstyledButton
      {...forwardedProps}
      ref={ref}
      id={ctx.getTargetId(value)}
      onClick={handleClick}
      className={classNames}
      aria-controls={ctx.getPanelId(value)}
      aria-expanded={ctx.isValueActive(value)}
      aria-disabled={ctx.disabled || disabled}
      data-expanded={ctx.isValueActive(value)}
      data-disabled={ctx.disabled || disabled}
    >
      <Box className={css.iconbox} data-active={ctx.isValueActive(value)} data-position="start">
        {(ctx.chevronPosition === 'start' ? chevron : icon) ?? null}
      </Box>

      <Box className={css.labelbox}>{children}</Box>

      <Box className={css.iconbox} data-active={ctx.isValueActive(value)} data-position="end">
        {(ctx.chevronPosition === 'end' ? chevron : icon) ?? null}
      </Box>
    </UnstyledButton>
  );
});

AccordionTarget.displayName = '@v2/Accordion.Target';
export { AccordionTarget };
