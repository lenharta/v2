import React from 'react';
import { Store } from '@/types';
import { Box, Text, Title } from '@/core';
import { Section, TabLink } from '@/app/common';
import { DATA_HOME_EXPERIENCE_HEADLINE_COPY, DATA_HOME_EXPERIENCE_TILE_COPY } from '@/data';

interface HomeExpSectionProps {
  lang?: Store.LanguageName;
  navigate?: (to: string) => void;
}

export const HomeExpSection: React.FC<HomeExpSectionProps> = ({ lang = 'english', navigate }) => {
  const headlineData = DATA_HOME_EXPERIENCE_HEADLINE_COPY[lang][0];
  const tileData = DATA_HOME_EXPERIENCE_TILE_COPY[lang];
  return (
    <Section className="sec-home-exp">
      <Box className="sec-home-exp-box">
        <Title>{headlineData.title}</Title>
        <Text>{headlineData.text}</Text>
      </Box>
      <Box className="sec-home-exp-box">
        <TabLink.Group
          onClick={(event) => navigate?.(event.currentTarget.value)}
          items={tileData.map(({ key, text, title, value }) => ({
            icon: 'arrowUpRight',
            title: title!,
            value: value!,
            text,
            key,
          }))}
        />
      </Box>
    </Section>
  );
};
