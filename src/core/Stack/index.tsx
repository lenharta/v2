import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface StackProps {
  /** Defines a default HTML `class` that will be appended to the Stack elements classList */
  className?: string | undefined;
}

export type StackFactory = Core.Factory<{
  ref: HTMLDivElement;
  comp: 'div';
  props: StackProps;
}>;

const Stack = factory<StackFactory>((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      ref={ref}
      aria-orientation="vertical"
      className={clsx('stack', className)}
    />
  );
});

Stack.displayName = '@v2/core/Stack';
