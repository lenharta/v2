import { Section } from '@/app/components';
import { Text, Subtitle, Box } from '@/common';

export const HomeKeynote = () => (
  <Section>
    <Box>
      <Subtitle h2>Left Subtitle</Subtitle>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, debitis error repellendus
        ducimus exercitationem commodi numquam similique perferendis minima ipsa harum fugiat
        voluptatem autem dolorum dignissimos molestiae illo dolores a?
      </Text>
    </Box>

    <Box>
      <Subtitle h2>Right Subtitle</Subtitle>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, debitis error repellendus
        ducimus exercitationem commodi numquam similique perferendis minima ipsa harum fugiat
        voluptatem autem dolorum dignissimos molestiae illo dolores a?
      </Text>
    </Box>
  </Section>
);
