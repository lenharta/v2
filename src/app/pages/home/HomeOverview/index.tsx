import { CopyData } from '@/data/types';
import { LayoutProps } from '@/types';
import { extractCopyData } from '@/data/utils';
import { Box, Text, Title } from '@/common';
import { CopyCardGroup, Section } from '@/app/components';
import { SECTION_COPY_HOME_OVERVIEW_LEFT, SECTION_COPY_HOME_OVERVIEW_RIGHT } from '@/data/content';

const HomeOverviewLeft = ({ data, lang }: { data: CopyData } & LayoutProps) => {
  const { getTitle, getText } = extractCopyData(data, lang);
  const copy = { title: getTitle(), text: getText() };
  return (
    <Box className="home-sec-overview-left" cols={1} px="gutter" py="xxl" gap="lg">
      {copy.title && <Title h2 fz={10} children={copy.title} />}
      {copy.text && <Text fz={4} children={copy.text} />}
    </Box>
  );
};

const HomeOverviewRight = ({ data, lang }: { data: CopyData } & LayoutProps) => {
  const { getTitle, getText, getCards } = extractCopyData(data, lang);
  const copy = { title: getTitle(), text: getText(), cards: getCards() };
  return (
    <Box className="home-sec-overview-right" cols={1} px="gutter" py="xxl" gap="lg">
      {copy.title && <Title h2 fz={10} children={copy.title} />}
      {copy.text && <Text fz={4} children={copy.text} />}
      <CopyCardGroup data={copy.cards} />
    </Box>
  );
};

export const HomeOverview = ({ lang = 'english' }: LayoutProps) => (
  <Section cols={2} scheme="primary">
    <HomeOverviewLeft lang={lang} data={SECTION_COPY_HOME_OVERVIEW_LEFT} />
    <HomeOverviewRight lang={lang} data={SECTION_COPY_HOME_OVERVIEW_RIGHT} />
  </Section>
);
