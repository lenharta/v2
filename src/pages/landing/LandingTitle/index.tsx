import { Title } from '@/core';

const css = {
  title: 'v2-landing-title',
};

type LandingTitleFactory = React.FC<{}> & {};

const LandingTitle: LandingTitleFactory = ({}) => {
  return (
    <Title h1 className={css.title}>
      <span>Frontend Engineer</span>
      <span>Human-Centered Problem Solver</span>
    </Title>
  );
};

LandingTitle.displayName = '@v2/Landing.Title';
export { LandingTitle };
