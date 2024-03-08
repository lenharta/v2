import gsap from 'gsap';
import * as React from 'react';
import { useGSAP } from '@gsap/react';
import { useDispatch, useStore } from '@/store';

export const MenuButton = () => {
  const scopeRef = React.useRef<HTMLDivElement>(null);
  const timelineRef = React.useRef<gsap.core.Timeline>();
  const dispatch = useDispatch();
  const store = useStore();

  const commonAnimatedOptions = {
    ease: 'power5.inOut',
    duration: 0.2,
    opacity: 1,
    x: 0,
    y: 0,
  };

  const sliceTop: gsap.TweenVars = {
    ...commonAnimatedOptions,
    y: store.menuOpen ? 6 : 0,
    rotate: store.menuOpen ? 45 : 0,
  };

  const sliceMiddle: gsap.TweenVars = {
    ...commonAnimatedOptions,
    x: store.menuOpen ? 100 : 0,
    rotate: store.menuOpen ? 100 : 0,
    opacity: store.menuOpen ? 0 : 1,
  };

  const sliceBottom: gsap.TweenVars = {
    ...commonAnimatedOptions,
    y: store.menuOpen ? 6 : 0,
    rotate: store.menuOpen ? -45 : 0,
  };

  const createSlice = (index: number): [string, gsap.TweenVars] => {
    if (index === 1) return ['slice-1', sliceTop];
    if (index === 2) return ['slice-2', sliceMiddle];
    if (index === 3) return ['slice-3', sliceBottom];
    return ['slice-3', sliceBottom];
  };

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline()
        .to(...createSlice(2))
        .to(...createSlice(1))
        .to(...createSlice(3));
    },
    { scope: scopeRef, dependencies: [store.menuOpen] }
  );

  const handleAnimationClick = () => {
    dispatch({ menuOpen: !store.menuOpen });
    return timelineRef.current?.play();
  };

  return (
    <div ref={scopeRef} className="page-menu-button" onClick={handleAnimationClick}>
      <div className="page-menu-button-slice page-menu-button-slice-1" />
      <div className="page-menu-button-slice page-menu-button-slice-2" />
      <div className="page-menu-button-slice page-menu-button-slice-3" />
    </div>
  );
};
