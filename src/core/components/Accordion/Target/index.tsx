import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { UnstyledButton } from '../../UnstyledButton';
import { AccordionTargetProps } from '../Accordion.types';
import { useAccordionItemContext } from '../AccordionItem.context';
import { useAccordionContext } from '../Accordion.context';
import { createKeyDownGroup } from '@/core/utils';
import { Icon } from '../../Icon';

type AccordionTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: AccordionTargetProps;
}>;

const AccordionTarget = factory<AccordionTargetFactory>((props, ref) => {
  const { icon, chevron, disabled, className, children, ...forwardedProps } = props;

  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();
  const isActive = ctx.isValueActive(value);
  const chevronElement = chevron || <Icon name="caretDown" />;

  return (
    <UnstyledButton
      {...forwardedProps}
      ref={ref}
      id={ctx.getTargetId(value)}
      data-accordion-target
      data-disabled={disabled}
      aria-disabled={disabled}
      aria-expanded={isActive}
      aria-controls={ctx.getPanelId(value)}
      className={clsx('v2-accordion-target', className)}
      onClick={(event) => {
        forwardedProps.onClick?.(event);
        ctx.onValueChange(value);
      }}
      onKeyDown={createKeyDownGroup({
        preventDefault: false,
        childSelector: '[data-accordion-target]',
        parentSelector: '[data-accordion-root]',
        orientation: 'vertical',
        onKeyDown: forwardedProps.onKeyDown,
        loop: ctx.trapFocus,
      })}
    >
      <span className="v2-accordion-target-inner">
        <div
          children={ctx.chevronPosition === 'left' ? chevronElement : icon}
          className="v2-accordion-target-iconbox"
          data-active={isActive ? true : false}
          data-position="left"
        />

        {children}

        <div
          children={ctx.chevronPosition === 'right' ? chevronElement : icon}
          className="v2-accordion-target-iconbox"
          data-active={isActive ? true : false}
          data-position="right"
        />
      </span>
    </UnstyledButton>
  );
});

AccordionTarget.displayName = '@v2/Accordion.Target';
export { AccordionTarget };
