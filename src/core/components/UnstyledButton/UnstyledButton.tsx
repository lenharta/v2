import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core';
import { UnstyledButtonProps } from './types';

type UnstyledButtonFactory = Factory.Config<{
  comp: 'button';
  ref: HTMLButtonElement;
  props: UnstyledButtonProps;
}>;

const UnstyledButton = factoryPolymorphic<UnstyledButtonFactory>((props, ref) => {
  const { component: Component = 'button', ...forwardedProps } = props;
  return <Component ref={ref} {...forwardedProps} />;
});

UnstyledButton.displayName = '@v2/UnstyledButton';
export { UnstyledButton };
