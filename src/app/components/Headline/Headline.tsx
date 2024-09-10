import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Text, Title } from '@/core';

export type HeadlineProps = {
  href?: string;
  title?: string;
  order?: string;
};

export type HeadlineFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: HeadlineProps;
  element: 'div';
  elements: HeadlineFactory;
  excluded: 'children';
}>;

export const Headline = Component<HeadlineFactory>(
  ({ component: Component = 'div', className, order, href, title, ...props }, ref) => {
    return (
      <Component {...props} ref={ref} className={clsx('v2-headline', className)}>
        <span className="v2-headline-layout">
          <a className="v2-headline-anchor" href={href} />

          {order && (
            <Text className="v2-headline-order" span>
              {order}
            </Text>
          )}
          {title && (
            <Title className="v2-headline-title" h2>
              {title}
            </Title>
          )}
        </span>
      </Component>
    );
  }
);

Headline.displayName = '@v2/Headline';
