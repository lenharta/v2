import { Store } from '@/types';
import { Section } from '@/app/common';
import { Box, Text } from '@/core';
import { DATA_HOME_INTRO_CARD_COPY, DATA_HOME_INTRO_HEADLINE_COPY } from '@/data';

const HomeIntroCard = (props: Store.CopyItem) => {
  const { title, text } = props;
  const [value, unit] = title?.split('/')!;
  return (
    <div className="sec-home-intro-card">
      <div className="sec-home-intro-card-stat">
        {value && <span className="sec-home-intro-card-value accent-text">{value}</span>}
        {unit && <span className="sec-home-intro-card-unit">{unit}</span>}
      </div>
      <Text>{text}</Text>
    </div>
  );
};

export const HomeIntroSection = ({ lang = 'english' }: { lang?: Store.LanguageName }) => (
  <Section className="sec-home-intro">
    <Box className="sec-home-intro-box" scheme="secondary">
      <Text>{DATA_HOME_INTRO_HEADLINE_COPY[lang][0].text}</Text>
    </Box>
    <Box className="sec-home-intro-box">
      {DATA_HOME_INTRO_CARD_COPY[lang].map((copy) => (
        <HomeIntroCard {...copy} />
      ))}
    </Box>
  </Section>
);
