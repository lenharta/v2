import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface BoxProps {
  scheme?: Core.Scheme;
}

export type BoxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: BoxProps;
}>;

export const Box = factory<BoxFactory>((props, ref) => {
  const { scheme, children, className, ...otherProps } = props;
  const dataProps = { 'data-scheme': scheme };
  return (
    <div {...otherProps} {...dataProps} ref={ref} className={clsx('box', className)}>
      {children}
    </div>
  );
});

Box.displayName = '@v2/site/Box';
