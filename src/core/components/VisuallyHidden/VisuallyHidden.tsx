import clsx from 'clsx';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';

export type VisuallyHiddenFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.VisuallyHiddenProps;
  element: 'div';
}>;

export const HIDDEN_STYLE: React.CSSProperties = {
  visibility: 'hidden',
  position: 'fixed',
};

export const VisuallyHidden = PolymorphicComponent<VisuallyHiddenFactory>(
  ({ style, className, ...props }, ref) => {
    return (
      <div
        {...props}
        className={clsx('v2-visuallyhidden', className)}
        style={{ ...style, ...HIDDEN_STYLE }}
        ref={ref}
      />
    );
  }
);
