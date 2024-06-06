import { factory } from '@/core';
import { Factory } from '@/types';
import { DividerContentProps } from '../types';

type DividerContentFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: DividerContentProps;
  omits: 'children';
}>;

const DividerContent = factory<DividerContentFactory>((props, ref) => {
  const { label, position, show, className, ...forwardedProps } = props;

  if (!label || show !== true) return null;

  return (
    <div {...forwardedProps} ref={ref} className={className} data-position={position}>
      {label}
    </div>
  );
});

DividerContent.displayName = '@v2/Divider.Content';
export { DividerContent, type DividerContentFactory };
