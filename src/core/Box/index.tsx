import clsx from 'clsx';
import { Core, Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';

export interface BoxProps {
  /** Specifies the theme of the element */
  scheme?: Core.Scheme | undefined;
}

export type BoxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: BoxProps;
}>;

export const Box = factoryPolymorphic<BoxFactory>((props, ref) => {
  const {
    scheme = 'primary',
    children,
    className,
    component: Component = 'div',
    ...otherProps
  } = props;

  const dataProps = { 'data-scheme': scheme };

  return (
    <Component {...otherProps} {...dataProps} ref={ref} className={clsx('box', className)}>
      {children}
    </Component>
  );
});

Box.displayName = '@v2/site/Box';
