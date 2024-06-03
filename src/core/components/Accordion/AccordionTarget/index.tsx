import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { createKeyDownGroup } from '@/core/utils';
import { createEventCallback } from '@/utils';
import { Box, Icon, UnstyledButton } from '@/core/components';

import { AccordionTargetCSS, AccordionTargetProps } from '../types';
import { useAccordionContext, useAccordionItemContext } from '../Accordion.context';

type AccordionTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: AccordionTargetProps;
}>;

const css: AccordionTargetCSS = {
  root: 'v2-accordion-target-root',
  inner: 'v2-accordion-target-inner',
  iconbox: 'v2-accordion-target-iconbox',
  contentbox: 'v2-accordion-target-contentbox',
};

const AccordionTarget = factory<AccordionTargetFactory>((props, ref) => {
  const { icon, chevron, disabled, className, children, ...forwardedProps } = props;

  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();
  const isActive = ctx.isValueActive(value);
  const chevronElement = chevron || <Icon name="caretDown" />;

  const handleKeyDown = createKeyDownGroup({
    preventDefault: false,
    childSelector: '[data-accordion-target]',
    parentSelector: '[data-accordion-root]',
    orientation: 'vertical',
    onKeyDown: forwardedProps.onKeyDown,
    loop: ctx.trapFocus,
  });

  const handleClick = createEventCallback(forwardedProps.onClick, () => {
    ctx.onValueChange(value);
  });

  return (
    <UnstyledButton
      {...forwardedProps}
      ref={ref}
      id={ctx.getTargetId(value)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={clsx(css.root, className)}
      aria-controls={ctx.getPanelId(value)}
      aria-expanded={isActive}
      aria-disabled={disabled}
      data-disabled={disabled}
      data-accordion-target
    >
      <div className={css.inner}>
        {(chevronElement || icon) && (
          <Box className={css.iconbox} data-active={isActive ? true : false} data-position="start">
            {(ctx.chevronPosition === 'start' ? chevronElement : icon) || null}
          </Box>
        )}

        <Box className={css.contentbox}>{children}</Box>

        {(chevronElement || icon) && (
          <Box className={css.iconbox} data-active={isActive ? true : false} data-position="end">
            {(ctx.chevronPosition === 'end' ? chevronElement : icon) || null}
          </Box>
        )}
      </div>
    </UnstyledButton>
  );
});

AccordionTarget.displayName = '@v2/Accordion.Target';
export { AccordionTarget };
