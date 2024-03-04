import { useThemeCTX } from '@/store';
import { Text, Title } from '@/common';
import { DATA_HOME_SECTIONS } from '@/data/content';

export const HomeOverview = () => {
  const { state } = useThemeCTX();
  const lang = state.lang || 'english';
  return (
    <section className="sec">
      <div className="sec-left scheme-primary">
        <div className="sec-content">
          <Title h2 scheme="accent">
            {DATA_HOME_SECTIONS[lang].overview.title}
          </Title>
          <Text emphasis="reg">{DATA_HOME_SECTIONS[lang].overview.content[0].copy}</Text>
        </div>
      </div>
      <div className="sec-right scheme-secondary">
        <div className="sec-content">
          <Title h2 scheme="accent">
            {DATA_HOME_SECTIONS[lang].overview.title}
          </Title>
          <Text emphasis="reg">{DATA_HOME_SECTIONS[lang].overview.content[0].copy}</Text>
        </div>
      </div>
    </section>
  );
};
