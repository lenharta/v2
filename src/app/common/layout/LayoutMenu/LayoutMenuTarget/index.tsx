import { Action } from '@/app/common/action';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

export type LayoutMenuTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: {
    css: { grid: string; row: string; cell: string };
    data: { row: string; cells: string[] }[];
    format: (cx: string, uid: string) => string;
  };
}>;

export const LayoutMenuTarget = factory<LayoutMenuTargetFactory>((props, ref) => {
  const { data, css, format, onClick, ...otherProps } = props;
  return (
    <div className="layout-menu">
      <Action {...otherProps} ref={ref} onClick={onClick} className="layout-menu-target">
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

LayoutMenuTarget.displayName = '@v2/app/LayoutMenu.Target';
