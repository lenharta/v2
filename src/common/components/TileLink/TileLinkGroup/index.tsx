import { factory } from '@/core';
import { Factory } from '@/types';
import { useNavigate } from 'react-router-dom';

import { css } from '../tilelink-contants';
import { TileLinkProvider } from '../tilelink-context';
import { TileLinkGroupProps } from '../tilelink-types';
import { useStateContext } from '@/app';

type TileLinkGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TileLinkGroupProps;
}>;

const TileLinkGroup = factory<TileLinkGroupFactory>((props, ref) => {
  const {
    scheme = 'default',
    variant = 'default',
    orientation = 'horizontal',
    iconPosition = 'end',
    children,
  } = props;

  const store = useStateContext();
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className={css.group}
      aria-orientation={orientation}
      data-orientation={orientation}
    >
      <TileLinkProvider
        value={{
          store,
          scheme,
          variant,
          navigate,
          orientation,
          iconPosition,
        }}
      >
        {children}
      </TileLinkProvider>
    </div>
  );
});

TileLinkGroup.displayName = '@v2/TileLink.Group';
export { TileLinkGroup };
