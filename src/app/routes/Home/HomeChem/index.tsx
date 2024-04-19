import { Store } from '@/types';
import { Section } from '@/app/common';
import { Box, Icon, Text, Title } from '@/core';
import { DATA_HOME_CHEMICAL_CARDS } from '@/data';

interface ChemicalCardData {
  atomic: number;
  symbol: string;
  name: string;
  weight: number;
  href: string;
  text: string;
  key: string;
}

export interface ChemicalCardProps extends ChemicalCardData {}

const ChemicalCard = (props: ChemicalCardProps) => {
  const { atomic, href, name, symbol, text, weight } = props;
  return (
    <div className="chemical-card">
      <span className="chemical-card-atomic">{atomic}</span>
      <span className="chemical-card-symbol">{symbol}</span>
      <span className="chemical-card-name">{name}</span>
      <span className="chemical-card-weight">{weight}</span>
      <a
        href={href}
        title={name}
        children={<Icon name="open" />}
        className="chemical-card-link"
        aria-label={`${name} Offical Site`}
      />
    </div>
  );
};

export const HomeChemistrySection = ({ lang = 'english' }: { lang?: Store.LanguageName }) => {
  const data = DATA_HOME_CHEMICAL_CARDS[lang];
  return (
    <Section className="sec-home-chemistry">
      <Box className="sec-home-chemistry-header">
        <div>
          <Title>Do We Have Chemistry?</Title>
        </div>
        <div>
          <Text>
            In the face of rapid technological advancements, I believe in staying ahead of the curve
            to leverage emerging technologies to build unique and scalable platforms that cater to
            the evolving needs of your customers.
          </Text>
        </div>
      </Box>
      <Box className="sec-home-chemistry-content">
        {data.map(({ key, ...otherProps }) => (
          <ChemicalCard key={key} {...otherProps} />
        ))}
      </Box>
    </Section>
  );
};
