import { Section } from '@/app/components';
import { Text, Subtitle, Box } from '@/common';

export const HomeOverview = () => (
  <Section cols={2} scheme="primary">
    <Box>
      <Subtitle h2 size="lg">
        Left Subtitle
      </Subtitle>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, debitis error repellendus
        ducimus exercitationem commodi numquam similique perferendis minima ipsa harum fugiat
        voluptatem autem dolorum dignissimos molestiae illo dolores a?
      </Text>
    </Box>

    <Box scheme="secondary">
      <Subtitle h2 size="lg">
        Right Subtitle
      </Subtitle>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, debitis error repellendus
        ducimus exercitationem commodi numquam similique perferendis minima ipsa harum fugiat
        voluptatem autem dolorum dignissimos molestiae illo dolores a?
      </Text>
    </Box>
  </Section>
);
