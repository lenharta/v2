import { factoryPolymorphic } from '@/core/factory';
import { Factory } from '@/types';
import clsx from 'clsx';
import { VisuallyHiddenProps } from './types';

const css = {
  root: 'v2-visuallyhidden',
};

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
      className={clsx(css.root, className)}
    />
  );
});

export { VisuallyHidden, visuallyHiddenStyles };
