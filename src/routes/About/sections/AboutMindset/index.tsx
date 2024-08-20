import React from 'react';
import { Page } from '@app';

interface AboutMindsetProps {
  id: string;
  order: number;
  title: string;
}

export const AboutMindset: React.FC<AboutMindsetProps> = (props) => {
  const { id, order, title } = props;
  return (
    <React.Fragment>
      <Page.Headline order={order} id={id} title={title} />
    </React.Fragment>
  );
};
