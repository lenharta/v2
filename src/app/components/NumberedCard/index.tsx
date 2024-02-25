import * as React from 'react';
import { Stack, Title } from '@/common';

export type NumberedCardBaseProps = React.JSX.IntrinsicElements['div'];

export interface NumberedCardProps extends NumberedCardBaseProps {
  children?: React.ReactNode;
  integer?: string;
  title?: string;
}

export interface NumberedCardComponent {
  (props: NumberedCardProps): JSX.Element | null;
  displayName: string;
}

export const NumberedCard: NumberedCardComponent = (props) => {
  const { integer = '01', title, children } = props;
  return (
    <article className="NumberedCard">
      <span className="NumberedCard-integer" children={integer} />
      <Title className="NumberedCard-title" size="sm" children={title} h3 />
      <Stack className="NumberedCard-content">{children}</Stack>
    </article>
  );
};

NumberedCard.displayName = '@v2/NumberedCard';