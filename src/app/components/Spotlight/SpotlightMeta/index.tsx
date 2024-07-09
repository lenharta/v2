import { Factory } from '@/types';
import { createFactory } from '@/factory';

type SpotlightMetaFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
}>;

const SpotlightMeta = createFactory<SpotlightMetaFactory>((props, ref) => {
  const { children } = props;
  return (
    <div ref={ref} className="v2-spotlight-meta">
      {children}
    </div>
  );
});

SpotlightMeta.displayName = '@v2/Spotlight.Meta';
export { SpotlightMeta };
