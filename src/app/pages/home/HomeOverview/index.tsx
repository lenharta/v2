import { CopyData } from '@/data/types';
import { LayoutProps } from '@/types';
import { Box, Text, Title } from '@/common';
import { parseExtractedCopyData } from '@/data/utils';
import { CopyCardGroup, Section } from '@/app/components';
import { SECTION_COPY_HOME_OVERVIEW_LEFT, SECTION_COPY_HOME_OVERVIEW_RIGHT } from '@/data/content';

type HomeOverviewProps = { data: CopyData } & LayoutProps;

const HomeOverviewLeft = ({ data, lang }: HomeOverviewProps) => {
  const copy = parseExtractedCopyData(data, lang);
  return (
    <Box className="sec-home-overview--right">
      {copy.title && <Title h2 children={copy.title} />}
      {copy.text && <Text children={copy.text} />}
    </Box>
  );
};

const HomeOverviewRight = ({ data, lang }: HomeOverviewProps) => {
  const copy = parseExtractedCopyData(data, lang);
  return (
    <Box className="sec-home-overview--right">
      {copy.title && <Title h2 children={copy.title} />}
      {copy.text && <Text children={copy.text} />}
      <CopyCardGroup data={copy.cards} />
    </Box>
  );
};

export const HomeOverview = ({ lang = 'english' }: LayoutProps) => (
  <Section className="sec-home-overview">
    <HomeOverviewLeft lang={lang} data={SECTION_COPY_HOME_OVERVIEW_LEFT} />
    <HomeOverviewRight lang={lang} data={SECTION_COPY_HOME_OVERVIEW_RIGHT} />
  </Section>
);
