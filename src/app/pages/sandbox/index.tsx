import { Page } from '@/app/components';
import { Text, Title } from '@/common';

export const Sandbox = () => (
  <Page heroProps={{ title: 'Sandbox' }}>
    <Page.Section className="demo-section-content">
      <Title h2>Section Title</Title>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla modi, incidunt maxime est
        optio ratione obcaecati autem laborum neque corporis excepturi, iure mollitia aspernatur
        alias quos delectus itaque dolorum doloribus.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti temporibus quisquam
        dolores ex vero nam. Minima qui, sed ea sapiente quasi magnam modi quam repellendus
        molestias sunt corporis placeat tempore eveniet! Consequuntur, eum ullam minima ipsum
        dignissimos molestias porro animi maiores corporis exercitationem quis deleniti modi iste
        soluta voluptatem.
      </Text>
    </Page.Section>
  </Page>
);
