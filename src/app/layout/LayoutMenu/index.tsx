import gsap from 'gsap';
import * as React from 'react';
import { Action } from '@/app/action';
import { useGSAP } from '@gsap/react';
import { LayoutMenuPanel } from './Panel';
import { useMotionTimeline } from '@/motion';
import { useMergedClickOutside } from '@/hooks';
import { useAppDispatch, useAppState } from '@/store';

const data = [
  { row: 'r-1', cells: ['r-1-c-1', 'r-1-c-2', 'r-1-c-3'] },
  { row: 'r-2', cells: ['r-2-c-1', 'r-2-c-2', 'r-2-c-3'] },
  { row: 'r-3', cells: ['r-3-c-1', 'r-3-c-2', 'r-3-c-3'] },
] as const;

const css = {
  grid: 'layout-menu-grid',
  cell: 'layout-menu-cell',
  row: 'layout-menu-row',
};

function translate(x: number, y: number): string {
  return `translate(${x}%, ${y}%)`;
}

function transform(x: number, y: number, mounted?: boolean): gsap.TweenVars {
  const pos = mounted ? { x, y } : { x: 0, y: 0 };
  return { transform: translate(pos.x, pos.y) };
}

function createGridClass(cx: string, id: string) {
  return [cx, [cx, id].join('-')].join(' ');
}

function createGridSelector(cx: string, id: string) {
  return ['.', [cx, id].join('-')].join('');
}

type LayoutMenuComponent = React.FC<{}> & {
  Panel: typeof LayoutMenuPanel;
};

export const LayoutMenu: LayoutMenuComponent = ({}) => {
  const dispatch = useAppDispatch();
  const state = useAppState();

  const { scope, timeline } = useMotionTimeline<HTMLButtonElement>();

  const { boxRef, targetRef } = useMergedClickOutside({
    callback: () => dispatch({ isMenuOpen: undefined }),
    forwardedTargetRef: scope,
  });

  const common: gsap.TweenVars = {
    duration: 0.033,
    rotate: state.isMenuOpen ? '45deg' : '0deg',
    ease: state.isMenuOpen ? 'power1.in' : 'power1.Out',
  };

  const motion: Record<string, gsap.TweenVars> = {
    'r-1-c-1': { ...common, ...transform(0, 0, state.isMenuOpen) },
    'r-1-c-2': { ...common, ...transform(100, 100, state.isMenuOpen) },
    'r-1-c-3': { ...common, ...transform(0, 0, state.isMenuOpen) },
    'r-2-c-1': { ...common, ...transform(100, -100, state.isMenuOpen) },
    'r-2-c-2': { ...common, ...transform(0, 0, state.isMenuOpen) },
    'r-2-c-3': { ...common, ...transform(-100, 100, state.isMenuOpen) },
    'r-3-c-1': { ...common, ...transform(0, 0, state.isMenuOpen) },
    'r-3-c-2': { ...common, ...transform(-100, -100, state.isMenuOpen) },
    'r-3-c-3': { ...common, ...transform(0, 0, state.isMenuOpen) },
  };

  useGSAP(
    () => {
      timeline.current = gsap
        .timeline()
        .to(createGridSelector(css.cell, 'r-1-c-1'), motion['r-1-c-1'])
        .to(createGridSelector(css.cell, 'r-1-c-2'), motion['r-1-c-2'])
        .to(createGridSelector(css.cell, 'r-1-c-3'), motion['r-1-c-3'])
        .to(createGridSelector(css.cell, 'r-2-c-1'), motion['r-2-c-1'])
        .to(createGridSelector(css.cell, 'r-2-c-2'), motion['r-2-c-2'])
        .to(createGridSelector(css.cell, 'r-2-c-3'), motion['r-2-c-3'])
        .to(createGridSelector(css.cell, 'r-3-c-1'), motion['r-3-c-1'])
        .to(createGridSelector(css.cell, 'r-3-c-2'), motion['r-3-c-2'])
        .to(createGridSelector(css.cell, 'r-3-c-3'), motion['r-3-c-3']);
    },
    { scope, dependencies: [state.isMenuOpen] }
  );

  return (
    <React.Fragment>
      <div className="layout-menu">
        <Action
          ref={targetRef}
          className="layout-menu-target"
          onClick={() => {
            dispatch({
              isMenuOpen: !state.isMenuOpen ? true : undefined,
              isSearchOpen: undefined,
            });
          }}
        >
          <div className={css.grid}>
            {data.map(({ row, cells }) => (
              <div key={row} className={createGridClass(css.row, row)}>
                {cells.map((cell) => (
                  <div key={cell} className={createGridClass(css.cell, cell)} />
                ))}
              </div>
            ))}
          </div>
        </Action>
      </div>
      <LayoutMenu.Panel ref={boxRef} />
    </React.Fragment>
  );
};

LayoutMenu.displayName = '@v2/app/LayoutMenu';
LayoutMenu.Panel = LayoutMenuPanel;
