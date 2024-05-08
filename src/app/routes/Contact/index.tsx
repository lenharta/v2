import React from 'react';
import { Text } from '@/core';
import { ContactHero } from './ContactHero';
import { Page, Section } from '@/app/layouts';

export const Contact: React.FC = () => {
  return (
    <Page hero={<ContactHero />}>
      <Section>
        <Text>Content</Text>
      </Section>
    </Page>
  );
};

Contact.displayName = '@v2/route/Contact';
