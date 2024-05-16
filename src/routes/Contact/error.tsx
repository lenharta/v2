import { Link as RouterLink } from 'react-router-dom';
import { Main, Page, Section } from '@/common';
import { Link, Text, Title } from '@/core';

interface ContactErrorProps {}

const ContactError: React.FC<ContactErrorProps> = () => {
  const homeLink = <Link component={RouterLink} to="/" label="Go Home" inline />;
  return (
    <Page>
      <Main>
        <Section>
          <Title>Page Error: 404</Title>
          <Text>There was trouble loading the page. Try reloading -or- {homeLink}</Text>
        </Section>
      </Main>
    </Page>
  );
};

export { ContactError };
