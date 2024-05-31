import { Link } from 'react-router-dom';
import { Text, Title } from '@/core';
import { Main, Page, Section } from '@/common';

interface OverviewErrorProps {}

const OverviewError: React.FC<OverviewErrorProps> = () => {
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

export { OverviewError };
