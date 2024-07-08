import { Factory } from '@/types';
import { createFactory } from '@/factory';

type SpotlightMenuFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
}>;

const SpotlightMenu = createFactory<SpotlightMenuFactory>((props, ref) => {
  const { children } = props;
  return (
    <div ref={ref} className="v2-spotlight-menu">
      {children}
    </div>
  );
});

SpotlightMenu.displayName = '@v2/Spotlight.Menu';
export { SpotlightMenu };
