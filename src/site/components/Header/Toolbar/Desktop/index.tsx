import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface ToolbarDesktopProps {}

export type ToolbarDesktopFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ToolbarDesktopProps;
}>;

export const ToolbarDesktop = factory<ToolbarDesktopFactory>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="toolbar toolbar--desktop">
      <span>Toolbar Desktop</span>
    </div>
  );
});

ToolbarDesktop.displayName = 'Toolbar.Desktop';
