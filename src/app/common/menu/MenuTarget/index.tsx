import { Action } from '@/app/common/action';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

interface MenuTargetProps {
  css: { grid: string; row: string; cell: string };
  data: { row: string; cells: string[] }[];
  format: (cx: string, uid: string) => string;
}

export type MenuTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: MenuTargetProps;
}>;

export const MenuTarget = factory<MenuTargetFactory>((props, ref) => {
  const { data, css, format, onClick, ...otherProps } = props;
  return (
    <div className="menu">
      <Action {...otherProps} ref={ref} onClick={onClick} className="menu-target">
        <div className={css.grid}>
          {data.map(({ row, cells }) => (
            <div key={row} className={format(css.row, row)}>
              {cells.map((cell) => (
                <div key={cell} className={format(css.cell, cell)} />
              ))}
            </div>
          ))}
        </div>
      </Action>
    </div>
  );
});

MenuTarget.displayName = '@v2/app/Menu.Target';
