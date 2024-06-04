import { Link } from 'react-router-dom';
import { Text, Title } from '@/core';
import { Hero, Main, Page, Section } from '@/common';

type ContactErrorFactory = React.FC<{}> & {};

const ContactError: ContactErrorFactory = () => {
  const homepage = <Link to="/">homepage.</Link>;
  return (
    <Page>
      <Hero title="Page Not Found | 404" />
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

ContactError.displayName = '@v2/Contact.Error';
export { ContactError };
