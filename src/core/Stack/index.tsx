import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface StackProps extends Core.BaseProps {}

export type StackFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: StackProps;
}>;

const Stack = factory<StackFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} aria-orientation="vertical" className={clsx('stack', className)}>
      {children}
    </div>
  );
});

Stack.displayName = '@v2/core/Stack';
