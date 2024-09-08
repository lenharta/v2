import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type HeroProps = {};

export type HeroFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: HeroProps;
  element: 'section';
}>;

export const Hero = Component<HeroFactory>(
  ({ children, component: Component = 'section', className, ...props }, ref) => (
    <Component {...props} ref={ref} className={clsx('v2-hero', className)}>
      {children}
    </Component>
  )
);

Hero.displayName = '@v2/Hero';
