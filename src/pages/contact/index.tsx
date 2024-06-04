import { Text, Title } from '@/core';
import { ContactError } from './contact-error';
import { Hero, Main, Page, Section } from '@/common';

type ContactRouteFactory = React.FC<{}> & {
  Error: typeof ContactError;
};

const Contact: ContactRouteFactory = () => (
  <Page>
    <Hero title="Contact" />
    <Main>
      <Section>
        <Title h2>Section Title</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur harum ab corrupti
          eos repellendus maiores hic quo nulla cum, dolorem soluta quis saepe aliquid quibusdam?
          Doloribus veritatis corrupti consequuntur eius.
        </Text>
      </Section>
    </Main>
  </Page>
);

Contact.Error = ContactError;
Contact.displayName = '@v2/Contact.Route';
export { Contact };
