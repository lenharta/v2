import * as React from 'react';
import { Text, Title } from '@/core';

interface PageHeadlineProps {
  id: string;
  order: number;
  title: string;
}

function formatOrder(value: number) {
  if (value < 10) {
    return ['0', value, '.'].join('');
  } else {
    return [value, '.'].join('');
  }
}

const PageHeadline: React.FC<PageHeadlineProps> = (props) => {
  const { id, order, title } = props;
  return (
    <React.Fragment>
      <a href={id} aria-label={title} />
      <header className="v2-page-headline" id={id}>
        <div className="v2-page-headline-layout">
          <Text className="v2-page-headline-order">{formatOrder(order)}</Text>
          <Title className="v2-page-headline-title" h2>
            {title}
          </Title>
        </div>
      </header>
    </React.Fragment>
  );
};

PageHeadline.displayName = '@v2/Page.Headline';
export { PageHeadline };
