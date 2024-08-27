import clsx from 'clsx';
import { Factory } from '@/types';
import { VisuallyHiddenProps } from './types';
import { createPolymorphicFactory } from '@/factory';

type VisuallyHiddenFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: VisuallyHiddenProps;
}>;

const HIDDEN_STYLE: React.CSSProperties = {
  visibility: 'hidden',
  position: 'fixed',
};

const VisuallyHidden = createPolymorphicFactory<VisuallyHiddenFactory>((props, ref) => {
  const { style, className, ...forwardedProps } = props;
  return (
    <div
      ref={ref}
      style={{ ...style, ...HIDDEN_STYLE }}
      className={clsx('v2-visuallyhidden', className)}
      {...forwardedProps}
    />
  );
});

export { VisuallyHidden, HIDDEN_STYLE };
