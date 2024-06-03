import { Link } from 'react-router-dom';
import { Text, Title } from '@/core';
import { Hero, Main, Page, Section } from '@/common';

type ExperienceErrorFactory = React.FC<{}> & {};

const ExperienceError: ExperienceErrorFactory = () => {
  const homepage = <Link to="/">homepage.</Link>;
  return (
    <Page>
      <Hero title={<Title h1>Page Not Found | 404</Title>} />
      <Main>
        <Section>
          <Title h2>Sorry, we couldn't find that page.</Title>
          <Text>
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable. Try searching for it or go back to the {homepage}
          </Text>
        </Section>
      </Main>
    </Page>
  );
};

ExperienceError.displayName = '@v2/Experience.Error';
export { ExperienceError };
