import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface ToolbarMobileProps {}

export type ToolbarMobileFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ToolbarMobileProps;
}>;

export const ToolbarMobile = factory<ToolbarMobileFactory>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="toolbar toolbar--mobile">
      <span>Toolbar Mobile</span>
    </div>
  );
});

ToolbarMobile.displayName = 'Toolbar.Mobile';
