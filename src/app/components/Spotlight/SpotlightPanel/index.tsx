import { Factory } from '@/types';
import { createFactory } from '@/factory';

type SpotlightPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
}>;

const SpotlightPanel = createFactory<SpotlightPanelFactory>((props, ref) => {
  const { children } = props;
  return (
    <div ref={ref} className="v2-spotlight-panel">
      {children}
    </div>
  );
});

SpotlightPanel.displayName = '@v2/Spotlight.Panel';
export { SpotlightPanel };
