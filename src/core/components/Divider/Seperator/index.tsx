import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { DividerSeparatorProps } from '../Divider.types';

type DividerSeparatorFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: DividerSeparatorProps;
  omits: 'children';
}>;

const DividerSeparator = factory<DividerSeparatorFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return <div {...forwardedProps} role="separator" className={className} ref={ref} />;
});

DividerSeparator.displayName = '@v2/Divider.Separator';
export { DividerSeparator, type DividerSeparatorFactory };
