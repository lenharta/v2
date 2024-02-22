import { Stack, Title } from '@/common';

export interface NumberedCardProps {
  title?: string;
  integer?: string;
  children?: React.ReactNode;
}

export const NumberedCard = (props: NumberedCardProps) => {
  const { integer = '01', title, children } = props;
  return (
    <article className="NumberedCard">
      <span className="NumberedCard-integer">{integer}</span>
      <Title component="h3" className="NumberedCard-title">
        {title}
      </Title>
      <Stack className="NumberedCard-content">{children}</Stack>
    </article>
  );
};
