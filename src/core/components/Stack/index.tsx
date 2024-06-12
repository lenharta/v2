import { Factory } from '@/types';
import { StackProps } from './types';
import { factoryPolymorphic, useThemeClasses } from '@/core';
import clsx from 'clsx';

const css = {
  root: 'v2-stack',
};

type StackFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: StackProps;
}>;

const Stack = factoryPolymorphic<StackFactory>((props, ref) => {
  const { gap, children, className, component: Component = 'div', ...forwardedProps } = props;

  return (
    <Component
      {...forwardedProps}
      ref={ref}
      className={clsx(css.root, `${css.root}--gap-${gap}`, className)}
      aria-orientation="vertical"
      data-orientation="vertical"
    >
      {children}
    </Component>
  );
});

Stack.displayName = '@v2/Stack';
export { Stack, type StackProps };
