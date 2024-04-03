import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface CaptionProps {}

export type CaptionFactory = Core.Factory<{
  ref: HTMLParagraphElement;
  comp: 'caption';
  props: CaptionProps;
}>;

export const Caption = factory<CaptionFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <caption {...otherProps} ref={ref} className={clsx('caption', className)}>
      {children}
    </caption>
  );
});

Caption.displayName = '@v2/core/Caption';
