import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../../../factory';
import { ButtonGroupProps } from '../Button.types';
import { Group } from '../../Group/Group';
import { ButtonProvider } from '../Button.context';

type ButtonGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ButtonGroupProps;
}>;

const ButtonGroup = factory<ButtonGroupFactory>((props, ref) => {
  const { children, className, variant, size, ...forwardedProps } = props;

  return (
    <Group ref={ref} className={clsx('v2-button-group', className)} {...forwardedProps}>
      <ButtonProvider value={{ variant, size }}>{children}</ButtonProvider>
    </Group>
  );
});

ButtonGroup.displayName = '@v2/Button.Group';
export { ButtonGroup };
