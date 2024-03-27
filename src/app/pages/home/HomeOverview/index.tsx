import { Section } from '@/app/components';
import { Text, Subtitle, Box, Title } from '@/common';

interface HomeStatBoxProps {
  integer?: string | undefined;
  headline?: string | undefined;
  description?: string | undefined;
}

const HomeStatBox = (props: HomeStatBoxProps) => {
  const { integer, headline, description } = props;
  return (
    <Box cols={1} className="home-stat-box" scheme="secondary">
      {integer && <Text className="home-stat-box-integer">{integer}</Text>}
      {headline && <Text className="home-stat-box-headline">{headline}</Text>}
      {description && <Text className="home-stat-box-description">{description}</Text>}
    </Box>
  );
};

export const HomeOverview = () => (
  <Section cols={2} scheme="primary">
    <Box>
      <Title h2 size="lg">
        Overview
      </Title>
      <Subtitle h3 size="lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, debitis error repellendus
        ducimus exercitationem commodi numquam similique perferendis minima ipsa harum fugiat
        voluptatem autem dolorum dignissimos?
      </Subtitle>
    </Box>

    <Box scheme="secondary" cols={2}>
      <HomeStatBox integer="5+" />
      <HomeStatBox integer="50K" />
      <HomeStatBox integer="23+" />
      <HomeStatBox integer="2483" />
    </Box>
  </Section>
);
