import { Store } from '@/types';
import { Section } from '@/app/common';
import { Box, Icon, Text, Tile, Title } from '@/core';
import { DATA_HOME_EXPERIENCE_HEADLINE_COPY, DATA_HOME_EXPERIENCE_TILE_COPY } from '@/data';

interface HomeExpSectionProps {
  lang?: Store.LanguageName;
}

export const HomeExpSection: React.FC<HomeExpSectionProps> = ({ lang = 'english' }) => {
  const headlineData = DATA_HOME_EXPERIENCE_HEADLINE_COPY[lang][0];
  const tileData = DATA_HOME_EXPERIENCE_TILE_COPY[lang];
  return (
    <Section className="sec-home-exp">
      <Box className="sec-home-exp-box">
        <Title>{headlineData.title}</Title>
        <Text>{headlineData.text}</Text>
      </Box>
      <Box className="sec-home-exp-box">
        {tileData.map(({ key, text, title }) => (
          <Box key={key} className="sec-home-exp-item" tabIndex={0}>
            <div className="sec-home-exp-item-content">
              <Title className="accent-text">{title}</Title>
              <Text>{text}</Text>
            </div>
            <Icon name="arrowUpRight" />
          </Box>
        ))}
      </Box>
    </Section>
  );
};
