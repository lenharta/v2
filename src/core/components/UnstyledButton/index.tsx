import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';

interface UnstyledButtonProps {}

type UnstyledButtonFactory = Factory.Config<{
  comp: 'button';
  ref: HTMLButtonElement;
  props: UnstyledButtonProps;
}>;

const UnstyledButton = factoryPolymorphic<UnstyledButtonFactory>((props, ref) => {
  const { component: Component = 'button', ...forwardedProps } = props;
  return <Component ref={ref} {...forwardedProps} />;
});

UnstyledButton.displayName = '@v2/Button.Unstyled';
export { UnstyledButton, type UnstyledButtonProps };
