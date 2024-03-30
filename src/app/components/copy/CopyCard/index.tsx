import clsx from 'clsx';
import { LayoutProps } from '@/types';
import { CopyCardData } from '@/data/types';
import { Box, Icon, Subtitle, Text } from '@/common';
import { parseExtractedCopyCardData } from '@/data/utils';

export type CopyCardProps = { data: CopyCardData } & LayoutProps;

export const CopyCard = (props: CopyCardProps) => {
  const { data, lang, className } = props;
  const card = parseExtractedCopyCardData(data, lang);
  return (
    <Box id={card.id} className={clsx('copy-card', className)} cols={1}>
      {card.icon && <Icon name={card.icon} size="xxl" />}
      {card.title && <Subtitle>{card.title}</Subtitle>}
      {card.text && <Text>{card.text}</Text>}
    </Box>
  );
};
