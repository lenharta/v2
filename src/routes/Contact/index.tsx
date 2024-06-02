import React from 'react';
import { Text, Title } from '@/core';
import { ContactError } from './error';
import { Hero, Main, Page, Section } from '@/common';

interface ContactProps {}

type ContactComponent = React.FC<ContactProps> & {
  Error: typeof ContactError;
};

const Contact: ContactComponent = () => {
  return (
    <Page>
      <Hero title={<Title>Contact</Title>} />
      <Main>
        <Section>
          <Title>Section Title</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas numquam ex recusandae
            velit sequi quae qui! Animi ea unde, asperiores ratione dolorem facere consectetur fuga
            iusto, quae impedit perferendis deserunt.t
          </Text>
        </Section>
      </Main>
    </Page>
  );
};

Contact.Error = ContactError;
Contact.displayName = '@v2/Contact';
export { Contact };
