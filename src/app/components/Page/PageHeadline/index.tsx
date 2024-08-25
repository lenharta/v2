import * as React from 'react';
import { Text, Title } from '@core';

const css = {
  root: 'page-headline',
  layout: 'page-headline-layout',
  header: 'page-headline-header',
  anchor: 'page-headline-anchor',
  order: 'page-headline-order',
  title: 'page-headline-title',
};

interface PageHeadlineProps {
  id: string;
  order: number;
  title: string;
  // classNames?: Partial<Clxsses<keyof typeof defaultClassNames>>;
}

function useHeadlineProps(props: PageHeadlineProps) {
  // const css = useClxssNames(defaultClassNames, {
  //   classNames: props.classNames,
  // });

  const orderPrefix = props.order < 10 ? '0' : '';
  const orderFormat = [orderPrefix, props.order, '.'].join();

  return {
    root: { className: css.root },
    layout: { className: css.layout },
    anchor: { className: css.anchor },
    order: { className: css.order, children: orderFormat },
    title: { className: css.title, h2: true },
  };
}

export const PageHeadline: React.FC<PageHeadlineProps> = (properties) => {
  const props = useHeadlineProps(properties);

  return (
    <header {...props.root}>
      <a {...props.anchor} />
      <div {...props.layout}>
        <Text {...props.order} />
        <Title {...props.title} />
      </div>
    </header>
  );
};

PageHeadline.displayName = '@v2/Page.Headline';
