import { Factory } from '@/types';
import { createFactory } from '@/factory';

type SpotlightDisplayFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
}>;

const SpotlightDisplay = createFactory<SpotlightDisplayFactory>((props, ref) => {
  const { children } = props;
  return (
    <div ref={ref} className="v2-spotlight-display">
      {children}
    </div>
  );
});

SpotlightDisplay.displayName = '@v2/Spotlight.Display';
export { SpotlightDisplay };
