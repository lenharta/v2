import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Text, Title } from '@/core';

export type HeadlineProps = {
  hash?: string;
  text?: string;
  title?: string;
};

export type HeadlineFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: HeadlineProps;
  element: 'div';
  elements: HeadlineFactory;
  excluded: 'children';
}>;

export const Headline = Component<HeadlineFactory>(
  ({ component: Component = 'div', className, hash, text, title, ...props }, ref) => {
    return (
      <Component {...props} ref={ref} className={clsx('v2-headline', className)}>
        {title && <Title>{title}</Title>}
        {text && <Text>{text}</Text>}
      </Component>
    );
  }
);

Headline.displayName = '@v2/Headline';
