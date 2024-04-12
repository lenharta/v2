import { Transition } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

interface LayoutSearchInputProps {
  mounted: boolean;
  onEntered?: () => void;
  onEnter?: () => void;
  onExited?: () => void;
  onExit?: () => void;
}

export type LayoutSearchInputFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: LayoutSearchInputProps;
}>;

export const LayoutSearchInput = factory<LayoutSearchInputFactory>((props, ref) => {
  const { mounted, onEnter, onEntered, onExit, onExited, ...otherProps } = props;
  return (
    <Transition
      onExit={onExit}
      onEnter={onEnter}
      onEntered={onEntered}
      onExited={onExited}
      mounted={mounted}
      timingFunction="cubic-bezier(0.4, 0.14, 0.3, 1)"
      duration={600}
      transition={{
        transitionProperty: 'transform, opacity',
        common: { transformOrigin: 'right' },
        out: { transform: 'scaleX(0)', opacity: 0 },
        in: { transform: 'scaleX(1)', opacity: 1 },
      }}
    >
      {(transitionStyles) => (
        <input
          {...otherProps}
          ref={ref}
          type="text"
          role="search"
          style={transitionStyles}
          className="layout-search-input"
          placeholder="Search"
          tabIndex={0}
        />
      )}
    </Transition>
  );
});

LayoutSearchInput.displayName = '@v2/LayoutSearch.Input';
