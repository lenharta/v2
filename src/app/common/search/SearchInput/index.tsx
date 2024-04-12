import { Transition } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

interface SearchInputProps {
  mounted: boolean;
  onEntered?: () => void;
  onEnter?: () => void;
  onExited?: () => void;
  onExit?: () => void;
}

export type SearchInputFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: SearchInputProps;
}>;

export const SearchInput = factory<SearchInputFactory>((props, ref) => {
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
          className="search-input"
          placeholder="Search"
          tabIndex={0}
        />
      )}
    </Transition>
  );
});

SearchInput.displayName = '@v2/Search.Input';
