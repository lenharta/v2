import { Text, Title } from '@/core';
import { ToolboxError } from './toolbox-error';
import { Hero, Page, Section } from '@/common';

type ToolboxRouteFactory = React.FC<{}> & {
  Error: typeof ToolboxError;
};

const Toolbox: ToolboxRouteFactory = () => (
  <Page>
    <Hero title="Toolbox" />
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

Toolbox.Error = ToolboxError;
Toolbox.displayName = '@v2/Toolbox.Route';
export { Toolbox };
