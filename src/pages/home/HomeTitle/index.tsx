import { Title } from '@/core';

const css = {
  title: 'v2-home-title',
};

type HomeTitleFactory = React.FC<{}> & {};

const HomeTitle: HomeTitleFactory = ({}) => {
  return (
    <Title h1 className={css.title}>
      <span>Frontend Engineer</span>
      <span>Human-Centered Problem Solver</span>
    </Title>
  );
};

HomeTitle.displayName = '@v2/Home.Title';
export { HomeTitle };
