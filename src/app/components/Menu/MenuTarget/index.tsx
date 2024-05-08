import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { eventCodes } from '@/data';
import { MenuTargetCSS } from '@/app/components';

export interface MenuTargetProps {
  css: MenuTargetCSS;
  onFocusHeader: () => void;
  onFocusSidebar: () => void;
}

export type MenuTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: MenuTargetProps;
  comps: {
    Row: React.FC<{ css: MenuTargetCSS }>;
  };
}>;

export const MenuTarget = factory<MenuTargetFactory>((props, ref) => {
  const { onFocusSidebar, onFocusHeader, css } = props;

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const events = {
      [eventCodes.ArrowDown]: onFocusSidebar,
      [eventCodes.ArrowRight]: onFocusHeader,
    }[event.code];

    events?.();
  };

  return (
    <button ref={ref} className={css.root} onKeyDown={onKeyDown}>
      <span className={css.grid}>
        <MenuTarget.Row css={css} />
        <MenuTarget.Row css={css} />
        <MenuTarget.Row css={css} />
      </span>
    </button>
  );
});

MenuTarget.Row = ({ css }) => {
  return (
    <div className={css.row}>
      <div className={css.cell} />
      <div className={css.cell} />
      <div className={css.cell} />
    </div>
  );
};

MenuTarget.displayName = '@v2/Menu.Target';
