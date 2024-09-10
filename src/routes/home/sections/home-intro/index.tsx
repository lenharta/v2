// import * as Router from 'react-router-dom';
import { Text } from '@/core';
import { Headline, Section } from '@/app';

export const HomeIntro = () => {
  return (
    <>
      <Headline className="v2-home-intro-headline" title="Intro" href="home-intro" order=".01" />
      <Section className="v2-home-intro">
        <Text className="v2-home-intro-text">
          Located in the United States, actively seeking a role within a team of talented engineers
          that drive innovation and make impactful contributions to the industry.
        </Text>
      </Section>
    </>
  );
};
