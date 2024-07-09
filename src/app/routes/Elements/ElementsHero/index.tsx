import { Page } from '@/app';
import { Title } from '@/core';

type ElementsHeroProps = {
  title: string;
};

const ElementsHero: React.FC<ElementsHeroProps> = (props) => {
  const { title } = props;
  return (
    <Page.Hero>
      <Title h1>{title}</Title>
    </Page.Hero>
  );
};

export { ElementsHero };
