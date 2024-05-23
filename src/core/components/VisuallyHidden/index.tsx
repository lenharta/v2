import { factoryPolymorphic } from '@/core/factory';
import { Factory } from '@/types';
import clsx from 'clsx';

interface VisuallyHiddenProps {}

type VisuallyHiddenFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: VisuallyHiddenProps;
}>;

const visuallyHiddenStyles: React.CSSProperties = {
  visibility: 'hidden',
  position: 'fixed',
};

const VisuallyHidden = factoryPolymorphic<VisuallyHiddenFactory>((props, ref) => {
  const { style, className, ...forwardedProps } = props;
  return (
    <div
      {...forwardedProps}
      ref={ref}
      style={{ ...style, ...visuallyHiddenStyles }}
      className={clsx('v2-visually-hidden', className)}
    />
  );
});

export { VisuallyHidden, visuallyHiddenStyles, type VisuallyHiddenProps };
