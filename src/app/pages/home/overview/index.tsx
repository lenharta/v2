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
          <Title h2 size="md" scheme="accent-xbd">
            {DATA_HOME_SECTIONS[lang].overview.title}
          </Title>
          <Text scheme="primary-med">{DATA_HOME_SECTIONS[lang].overview.content[0].copy}</Text>
        </div>
      </div>
      <div className="sec-right scheme-secondary">
        <div className="sec-content">
          <Title h3 size="lg" scheme="secondary-xbd">
            Shaping the future of the world’s biggest brands–and having fun while doing it.
          </Title>
        </div>
      </div>
    </section>
  );
};
