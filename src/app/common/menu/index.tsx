import gsap from 'gsap';
import * as React from 'react';
import { useGSAP } from '@gsap/react';
import { MenuPanel } from './MenuPanel';
import { MenuTarget } from './MenuTarget';
import { useAppDispatch, useAppState } from '@/store';
import { useMergeRefs, useOutsideClick } from '@/hooks';
import { transform, motionClass, motionSelector, useMotionTimeline } from '@/motion';

const data = [
  { row: 'r-1', cells: ['r-1-c-1', 'r-1-c-2', 'r-1-c-3'] },
  { row: 'r-2', cells: ['r-2-c-1', 'r-2-c-2', 'r-2-c-3'] },
  { row: 'r-3', cells: ['r-3-c-1', 'r-3-c-2', 'r-3-c-3'] },
];

const css = {
  grid: 'menu-grid',
  cell: 'menu-cell',
  row: 'menu-row',
};

export type MenuComponent = React.FC<{}> & {
  Target: typeof MenuTarget;
  Panel: typeof MenuPanel;
};

export const Menu: MenuComponent = ({}) => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const { scope, timeline } = useMotionTimeline<HTMLButtonElement>();

  const boxRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLButtonElement>(null);
  const mergedScopeRefs = useMergeRefs<HTMLButtonElement>(targetRef, scope);

  useOutsideClick([boxRef, targetRef], () => {
    dispatch({ isMenuOpen: undefined });
  });

  const common: gsap.TweenVars = {
    duration: 0.06,
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
        .to(motionSelector(css.cell, 'r-1-c-1'), motion['r-1-c-1'])
        .to(motionSelector(css.cell, 'r-1-c-2'), motion['r-1-c-2'])
        .to(motionSelector(css.cell, 'r-1-c-3'), motion['r-1-c-3'])
        .to(motionSelector(css.cell, 'r-2-c-1'), motion['r-2-c-1'])
        .to(motionSelector(css.cell, 'r-2-c-2'), motion['r-2-c-2'])
        .to(motionSelector(css.cell, 'r-2-c-3'), motion['r-2-c-3'])
        .to(motionSelector(css.cell, 'r-3-c-1'), motion['r-3-c-1'])
        .to(motionSelector(css.cell, 'r-3-c-2'), motion['r-3-c-2'])
        .to(motionSelector(css.cell, 'r-3-c-3'), motion['r-3-c-3']);
    },
    { scope, dependencies: [state.isMenuOpen] }
  );

  return (
    <React.Fragment>
      <Menu.Target
        ref={mergedScopeRefs}
        css={css}
        data={data}
        format={motionClass}
        onClick={() => {
          dispatch({
            isMenuOpen: !state.isMenuOpen ? true : undefined,
            isSearchOpen: undefined,
          });
        }}
        onKeyDown={(event) => {
          event.stopPropagation();
          if (event.code === 'Escape') {
            dispatch({ isMenuOpen: undefined });
          }
        }}
      />
      <Menu.Panel ref={boxRef} />
    </React.Fragment>
  );
};

Menu.displayName = '@v2/app/Menu';
Menu.Target = MenuTarget;
Menu.Panel = MenuPanel;
