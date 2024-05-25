import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { UnstyledButton } from '../../UnstyledButton';
import { AccordionTargetProps } from '../Accordion.types';

type AccordionTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: AccordionTargetProps;
}>;

const AccordionTarget = factory<AccordionTargetFactory>((props, ref) => {
  const { className, children, ...forwardedProps } = props;
  return (
    <UnstyledButton
      {...forwardedProps}
      data-accordion-target
      className={clsx('v2-accordion-target', className)}
      ref={ref}
    >
      {children}
    </UnstyledButton>
  );
});

AccordionTarget.displayName = '@v2/Accordion.Target';
export { AccordionTarget };
