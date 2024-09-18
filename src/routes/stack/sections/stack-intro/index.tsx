import { Text } from '@/core';
import { Section } from '@/app';

export const StackIntro: React.FC<{}> = ({}) => {
  return (
    <Section className="v2-stack-intro">
      <Text>
        This table features the front-end technologies I use to create dynamic user interfaces, with
        a focus on React, TypeScript, Sass, and CSS for building responsive and accessible
        applications.
      </Text>
    </Section>
  );
};

StackIntro.displayName = '@v2/Stack.Intro';
