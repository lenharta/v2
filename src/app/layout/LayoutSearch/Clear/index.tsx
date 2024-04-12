import { Action } from '@/app/action';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Transition } from '@/core';

export type LayoutSearchClearFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: {
    mounted: boolean;
  };
}>;

export const LayoutSearchClear = factory<LayoutSearchClearFactory>((props, ref) => {
  const { mounted, ...otherProps } = props;
  return (
    <Transition
      mounted={mounted}
      duration={600}
      timingFunction="cubic-bezier(0.4, 0.14, 0.3, 1)"
      transition={{
        transitionProperty: 'transform, opacity',
        common: { transformOrigin: 'bottom', transitionDelay: '100ms' },
        out: { transform: 'scaleX(0)', opacity: 0 },
        in: { transform: 'scaleX(1)', opacity: 1 },
      }}
    >
      {(transitionStyles) => (
        <Action
          {...otherProps}
          ref={ref}
          icon="dismissCircle"
          label="header clear action"
          variant="button"
          className="layout-clear-target"
          style={transitionStyles}
        />
      )}
    </Transition>
  );
});

LayoutSearchClear.displayName = '@v2/app/LayoutSearch.Clear';
