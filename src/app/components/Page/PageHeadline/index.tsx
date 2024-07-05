import * as React from 'react';
import { Text, Title } from '@/core';

interface PageHeadlineProps {
  id: string;
  order: number;
  title: string;
}

const PageHeadline: React.FC<PageHeadlineProps> = (props) => {
  const { id, order, title } = props;
  return (
    <header className="v2-page-headline">
      <a href={id} aria-label={title} />
      <div className="v2-page-headline-layout">
        <Text className="v2-page-headline-order">{order}</Text>
        <Title className="v2-page-headline-title" h2>
          {title}
        </Title>
      </div>
    </header>
  );
};

PageHeadline.displayName = '@v2/Page.Headline';
export { PageHeadline };
