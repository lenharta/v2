import { Text, Title } from '@/core';
import { ProfileError } from './profile-error';
import { Hero, Main, Page, Section } from '@/common';

type ProfileRouteFactory = React.FC<{}> & {
  Error: typeof ProfileError;
};

const Profile: ProfileRouteFactory = () => (
  <Page>
    <Hero title="Profile" />
    <Section>
      <Title h2>Section Title</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur harum ab corrupti eos
        repellendus maiores hic quo nulla cum, dolorem soluta quis saepe aliquid quibusdam?
        Doloribus veritatis corrupti consequuntur eius.
      </Text>
    </Section>
  </Page>
);

Profile.Error = ProfileError;
Profile.displayName = '@v2/Profile.Route';
export { Profile };
