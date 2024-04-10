import gsap from 'gsap';
import * as React from 'react';
import { useGSAP } from '@gsap/react';
import { useMergeRefs } from '@/hooks';
import { useAppDispatch, useAppState } from '@/store';
import { motionSelector, useMotionTimeline } from '@/motion';

import { MenuNav } from './Nav';
import { MenuLogo } from './Logo';
import { MenuPanel } from './Panel';
import { MenuTarget } from './Target';
import { MenuFooter } from './Footer';

export type MenuComponent = React.FC & {
  Footer: typeof MenuFooter;
  Target: typeof MenuTarget;
  Panel: typeof MenuPanel;
  Logo: typeof MenuLogo;
  Nav: typeof MenuNav;
};

const css = {
  grid: 'menu-target-grid-grid',
  cell: 'menu-target-grid-cell',
  row: 'menu-target-grid-row',
};

const translate = (x: number, y: number, mounted?: boolean): gsap.TweenVars => {
  const pos = mounted ? { x, y } : { x: 0, y: 0 };
  return { transform: `translate(${pos.x}%, ${pos.y}%)` };
};

export const Menu: MenuComponent = () => {
  const { scope, timeline } = useMotionTimeline<HTMLButtonElement>();
  const dispatch = useAppDispatch();
  const state = useAppState();

  const panelRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLButtonElement>(null);
  const targetRefs = useMergeRefs(targetRef, scope);

  const common: gsap.TweenVars = {
    duration: 0.033,
    rotate: state.isMenuOpen ? '45deg' : '0deg',
    ease: state.isMenuOpen ? 'power1.in' : 'power1.Out',
  };

  const cellMotion: Record<string, gsap.TweenVars> = {
    '-r-x-c-x': { ...common, ...translate(0, 0, state.isMenuOpen) },
    '-r-x-c-y': { ...common, ...translate(100, 100, state.isMenuOpen) },
    '-r-x-c-z': { ...common, ...translate(0, 0, state.isMenuOpen) },
    '-r-y-c-x': { ...common, ...translate(100, -100, state.isMenuOpen) },
    '-r-y-c-y': { ...common, ...translate(0, 0, state.isMenuOpen) },
    '-r-y-c-z': { ...common, ...translate(-100, 100, state.isMenuOpen) },
    '-r-z-c-x': { ...common, ...translate(0, 0, state.isMenuOpen) },
    '-r-z-c-y': { ...common, ...translate(-100, -100, state.isMenuOpen) },
    '-r-z-c-z': { ...common, ...translate(0, 0, state.isMenuOpen) },
  };

  useGSAP(
    () => {
      timeline.current = gsap
        .timeline()
        .to(motionSelector(css.cell, '-r-x-c-x'), cellMotion['-r-x-c-x'])
        .to(motionSelector(css.cell, '-r-x-c-y'), cellMotion['-r-x-c-y'])
        .to(motionSelector(css.cell, '-r-x-c-z'), cellMotion['-r-x-c-z'])
        .to(motionSelector(css.cell, '-r-y-c-x'), cellMotion['-r-y-c-x'])
        .to(motionSelector(css.cell, '-r-y-c-y'), cellMotion['-r-y-c-y'])
        .to(motionSelector(css.cell, '-r-y-c-z'), cellMotion['-r-y-c-z'])
        .to(motionSelector(css.cell, '-r-z-c-x'), cellMotion['-r-z-c-x'])
        .to(motionSelector(css.cell, '-r-z-c-y'), cellMotion['-r-z-c-y'])
        .to(motionSelector(css.cell, '-r-z-c-z'), cellMotion['-r-z-c-z']);
    },
    { scope, dependencies: [state.isMenuOpen] }
  );

  React.useEffect(() => {
    const events = ['mousedown', 'touchstart'];

    const listener = (event: any) => {
      const { target } = event ?? {};
      const hasPanel = panelRef.current;
      const hasTarget = targetRef.current;
      const hasPanelClick = hasPanel && hasPanel.contains(target);
      const hasTargetClick = hasTarget && hasTarget.contains(target);

      if (hasPanel && hasPanelClick) {
        return;
      }
      if (hasTarget && hasTargetClick) {
        return;
      }
      if (hasPanel && !hasPanelClick) {
        dispatch({ isMenuOpen: undefined });
      }
      if (hasTarget && !hasTargetClick) {
        dispatch({ isMenuOpen: undefined });
      }
    };

    events.forEach((fn) => document.addEventListener(fn, listener));

    return () => {
      events.forEach((fn) => document.addEventListener(fn, listener));
    };
  }, [panelRef, targetRef]);

  return (
    <React.Fragment>
      <Menu.Target ref={targetRefs} />
      <Menu.Panel ref={panelRef} />
      <Menu.Nav />
    </React.Fragment>
  );
};

Menu.displayName = '@v2/site/Menu';
Menu.Footer = MenuFooter;
Menu.Target = MenuTarget;
Menu.Panel = MenuPanel;
Menu.Logo = MenuLogo;
Menu.Nav = MenuNav;
