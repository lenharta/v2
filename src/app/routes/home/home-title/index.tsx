import { Title } from '@/core';

const css = {
  title: 'v2-home-title',
};

const HomeTitle: React.FC<{}> = ({}) => (
  <Title className={css.title} h1>
    Frontend Engineer
    <span>Human-Centered Problem Solver</span>
  </Title>
);

HomeTitle.displayName = '@v2/Home.Title';
export { HomeTitle };
