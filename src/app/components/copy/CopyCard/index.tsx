import { LayoutProps } from '@/types';
import { CopyDataCard } from '@/data/types';
import { extractCopyCardData } from '@/data/utils';
import { Box, Icon, Subtitle, Text } from '@/common';

export type CopyCardProps = { data: CopyDataCard } & LayoutProps;

export const CopyCard = (props: CopyCardProps) => {
  const { data, lang, className } = props;
  const { getId, getIcon, getText, getTitle } = extractCopyCardData(data, lang);
  const card = { id: getId(), icon: getIcon(), text: getText(), title: getTitle() };
  return (
    <Box id={getId()} className={className} cols={1}>
      {card.icon && <Icon name={card.icon} size="xxl" />}
      {card.title && <Subtitle>{card.title}</Subtitle>}
      {card.text && <Text>{card.text}</Text>}
    </Box>
  );
};
