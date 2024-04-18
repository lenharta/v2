import { Store } from '@/types';
import { Section } from '@/app/common';
import { Box, Text } from '@/core';
import { DATA_HOME_A11Y_HEADLINE_COPY } from '@/data';

export const HomeA11ySection = ({ lang = 'japanese' }: { lang?: Store.LanguageName }) => {
  const headline = DATA_HOME_A11Y_HEADLINE_COPY[lang][0].text;
  const [headlineText1, headlineAccent1, headlineText2, headlineAccent2] = headline.split('_');
  return (
    <Section className="sec-home-a11y">
      <Section.Content className="sec-home-a11y-content">
        <Box className="sec-home-a11y-box" data-position="left" scheme="secondary">
          {headline && (
            <Text>
              {headlineText1 && headlineText1}
              {headlineAccent1 && <span className="accent-text">{headlineAccent1}</span>}
              {headlineText2 && headlineText2}
              {headlineAccent2 && <span className="accent-text">{headlineAccent2}</span>}
            </Text>
          )}
        </Box>
        <Box className="sec-home-a11y-box" data-position="right">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime cumque odio quam
            totam natus doloribus culpa a perspiciatis sunt? Dignissimos et rem accusantium
            excepturi reiciendis velit beatae culpa eius.
          </Text>
        </Box>
      </Section.Content>
    </Section>
  );
};
