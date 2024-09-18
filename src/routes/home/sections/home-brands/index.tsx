import * as React from 'react';
import * as Company from '@/core/components/Icon/companies';
import { Text, Title } from '@/core/components';
import { Section } from '@/app';

type HomeBrandsTileComponent = React.FC<{
  logo: React.ReactNode;
  label: string;
  href: string;
  id: string;
}>;

type HomeBrandsComponent = React.FC<{}> & {
  Tile: HomeBrandsTileComponent;
};

export const HomeBrands: HomeBrandsComponent = ({}) => (
  <Section className="v2-home-brands">
    <Title className="v2-home-brands-title" h3>
      Trusted by Market Leaders: <span>Elevating Digital Presence for Renowned Brands.</span>
    </Title>

    <Text className="v2-home-brands-text">
      Proud to be trusted by renowned brands that rely on front-end development expertise to elevate
      their digital presence with a focus on innovative design and exceptional user experience.
      Let's transform your web experience into a powerful tool.
    </Text>

    <div className="v2-home-brands-tile-layout">
      <HomeBrands.Tile
        id="home-brand-transunion"
        label="Transunion"
        logo={<Company.LogoTransunion />}
        href="https://www.transunion.com/business"
      />

      <HomeBrands.Tile
        id="home-brand-mclaren"
        label="Mclaren Solutions"
        logo={<Company.LogoMclarenSolutions />}
        href="https://mclarenss.com/"
      />

      <HomeBrands.Tile
        id="home-brands-pace"
        label="Pace Communications"
        logo={<Company.LogoPace />}
        href="https://www.paceco.com/"
      />

      <HomeBrands.Tile
        id="home-brands-campbells"
        label="Campbells Foods"
        logo={<Company.LogoCampbells />}
        href="https://www.campbellsoupcompany.com/"
      />

      <HomeBrands.Tile
        id="home-brands-hawthorne"
        label="Hawthorne Residential"
        logo={<Company.LogoHawthornePartners />}
        href="https://hrpliving.com/"
      />

      <HomeBrands.Tile
        id="home-brands-walmart"
        label="Walmart"
        logo={<Company.LogoWalmart />}
        href="https://corporate.walmart.com/about"
      />

      <HomeBrands.Tile
        id="home-brands-stryker"
        label="Stryker"
        logo={<Company.LogoStryker />}
        href="https://www.stryker.com/us/en/about.html"
      />

      <HomeBrands.Tile
        id="home-brands-bofa"
        label="Bank of America"
        logo={<Company.LogoBofA />}
        href="https://about.bankofamerica.com/en/our-company"
      />

      <HomeBrands.Tile
        id="home-brands-jeffries"
        label="Jefferies"
        logo={<Company.LogoJeffries />}
        href="https://www.jefferies.com/about/"
      />

      <HomeBrands.Tile
        id="home-brands-bloomberg"
        label="Bloomberg"
        logo={<Company.LogoBloomberg />}
        href="https://www.bloomberg.com/company/what-we-do/"
      />
    </div>
  </Section>
);

HomeBrands.Tile = ({ id, href, logo, label }) => (
  <a
    id={id}
    rel="noopener"
    href={href}
    target="_blank"
    className="v2-home-brands-tile"
    aria-label={label}
    children={logo}
    tabIndex={0}
  />
);

HomeBrands.displayName = '@v2/Home.Brands';
HomeBrands.Tile.displayName = '@v2/Home.Brands.Tile';
