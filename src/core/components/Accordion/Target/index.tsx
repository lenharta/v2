import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Label } from '@/core/components/Label';
import { UnstyledButton } from '@/core/components/UnstyledButton';

interface AccordionTargetProps {
  value: string;
  label: string;
  disabled?: boolean | undefined;
}

type AccordionTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: AccordionTargetProps;
  omits: 'children';
}>;

const AccordionTarget = factory<AccordionTargetFactory>((props, ref) => {
  const { label, value, ...forwardedProps } = props;
  return (
    <UnstyledButton
      {...forwardedProps}
      className={clsx('v2-accordion-target')}
      children={<Label component="div">{label}</Label>}
      value={value}
      ref={ref}
    />
  );
});

AccordionTarget.displayName = '@v2/Accordion.Target';
export { AccordionTarget, type AccordionTargetProps };
