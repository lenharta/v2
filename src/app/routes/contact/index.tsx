import React from 'react';
import { Text, Title } from '@/core';
import { Page, Hero, Section } from '@/app';

const ContactHero = () => (
  <Hero>
    <Title h1>Contact</Title>
  </Hero>
);

const ContactOverview = () => (
  <Section>
    <Title h2>Overview</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
      nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
      reiciendis fugiat, ut tenetur.
    </Text>
  </Section>
);

const ContactRoute: React.FC<{}> = ({}) => (
  <Page>
    <ContactHero />
    <ContactOverview />
  </Page>
);

ContactRoute.displayName = '@v2/Route.Contact';
export { ContactRoute };
