import clsx from 'clsx';
import { Core } from '@/types';
import { Divider } from '@/core';
import { Component } from '@/factory';

export type OutlineItem = {
  label: string;
  value: string;
};

export type OutlineProps = {
  items: OutlineItem[];
  label?: string;
};

export type OutlineFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: OutlineProps;
  element: 'nav';
}>;

export const Outline = Component<OutlineFactory>(({ label, items, className, ...props }, ref) => {
  return (
    <nav {...props} ref={ref} className={clsx('v2-outline', className)}>
      <Divider label={label} />
      {items.map((item) => (
        <a key={item.value} className="v2-outline-item" href={item.value} aria-label={item.label}>
          <span className="v2-outline-item-layout">{item.label}</span>
        </a>
      ))}
    </nav>
  );
});
