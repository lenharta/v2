import { Hero } from '@/app';
import { Title } from '@/core';

export const StackHero: React.FC<{}> = ({}) => {
  return (
    <Hero>
      <Title h1>
        Stack | <span className="v2-accent-text">Table</span>
      </Title>
    </Hero>
  );
};

StackHero.displayName = '@v2/Stack.Hero';
