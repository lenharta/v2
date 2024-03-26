import { Section } from '@/app/components';
import { Text, Subtitle } from '@/common';

export const HomeTimeline = () => (
  <Section>
    <Section.Header title="Timeline" withDivider />
    <Section.Content cols={2}>
      <div>
        <Subtitle h2 size="lg" children="Left Content" />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, debitis error repellendus
          ducimus exercitationem commodi numquam similique perferendis minima ipsa harum fugiat
          voluptatem autem dolorum dignissimos molestiae illo dolores a?
        </Text>
      </div>
      <div>
        <Subtitle h2 size="lg" children="Right Content" />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, debitis error repellendus
          ducimus exercitationem commodi numquam similique perferendis minima ipsa harum fugiat
          voluptatem autem dolorum dignissimos molestiae illo dolores a?
        </Text>
      </div>
    </Section.Content>
  </Section>
);
