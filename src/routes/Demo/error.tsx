import { Link, Link as RouterLink } from 'react-router-dom';
import { Main, Page, Section } from '@/common';
import { Text, Title } from '@/core';

interface DemoErrorProps {}

const DemoError: React.FC<DemoErrorProps> = () => {
  const homeLink = <Link to="/">Go Home</Link>;
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

export { DemoError };
