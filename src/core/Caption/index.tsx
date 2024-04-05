import { Core, Factory } from '@/types';
import { factory } from '../factory';
import clsx from 'clsx';

export interface CaptionProps extends Core.BaseProps {}

export type CaptionFactory = Factory.Config<{
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
