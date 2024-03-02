import { Section } from '@/app/layouts';
import { Text, Title } from '@/common';
import { DATA_HOME_SECTIONS } from '@/data/content';
import { useThemeCTX } from '@/store';

export const HomeOverview = () => {
  const { state } = useThemeCTX();
  const lang = state.lang || 'english';
  return (
    <Section className="sec-home-overview">
      <Section.Header className="sec-home-overview-header">
        <Title h2 scheme="accent">
          {DATA_HOME_SECTIONS[lang].overview.title}
        </Title>
        <Title h3>{DATA_HOME_SECTIONS[lang].overview.headline}</Title>
      </Section.Header>
      <Section.Content className="sec-home-overview-content">
        <Text>{DATA_HOME_SECTIONS[lang].overview.content[0].copy}</Text>
      </Section.Content>
    </Section>
  );
};
