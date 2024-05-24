import { Section } from '@/common';
import { DemoRoot } from '../DemoRoot';
import { Text, Title } from '@/core';

const DemoSection = () => {
  return (
    <DemoRoot>
      <Section>
        <Title>Section Title</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis modi debitis consequatur
          cumque saepe recusandae eligendi optio beatae doloribus minus, atque maxime architecto,
          illum aliquam, voluptatem minima tempore corporis iure?
        </Text>
      </Section>
    </DemoRoot>
  );
};

export { DemoSection };
