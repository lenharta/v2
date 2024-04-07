import gsap from 'gsap';
import React from 'react';

export declare namespace Motion {
  export type Vars = gsap.TweenVars;
  export type Target = gsap.TweenTarget;
  export type Position = gsap.Position | undefined;
  export type Timeline = gsap.core.Timeline;

  export type Step = 'from' | 'to';
  export type Steps<K extends keyof Vars> = Record<Step, Vars[K]>;
  export type StepInput = [Motion.Target, Motion.Vars, Motion.Position];

  export type StepMiddleware = {
    from: (...args: StepInput) => Timeline;
    to: (...args: StepInput) => Timeline;
  };

  export interface Options {
    ease: Steps<'ease'>;
    duration: Steps<'duration'>;
    opacity: Steps<'opacity'>;
  }

  export interface Middleware {
    getEase<S extends Motion.Step>(step: S): gsap.TweenVars;
    getDuration<S extends Motion.Step>(step: S): gsap.TweenVars;
    getOpacity<S extends Motion.Step>(step: S): gsap.TweenVars;
  }

  export interface UseMotionReturn<E extends HTMLElement> {
    data: { steps: Step[] };
    scope: React.MutableRefObject<E | null>;
    timeline: React.MutableRefObject<gsap.core.Timeline | undefined>;
    middleware: Middleware;
  }

  export type UseMotionHook = <Scope extends HTMLElement>(
    options: Options
  ) => UseMotionReturn<Scope>;
}
