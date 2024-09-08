import { Section } from '@/app';
import {
  CompanyLogoTransunion,
  CompanyLogoMclaren,
  CompanyLogoPace,
  CompanyLogoCampbells,
  CompanyLogoHawthorne,
  CompanyLogoWalmart,
  CompanyLogoStryker,
  CompanyLogoBofA,
  CompanyLogoJeffries,
  CompanyLogoBloomberg,
  Title,
  Text,
} from '@/core';

const data = [
  {
    id: 'brands-company-transunion',
    url: 'https://www.transunion.com/business',
    logo: <CompanyLogoTransunion />,
  },
  {
    id: 'brands-company-mclaren',
    url: 'https://mclarenss.com/',
    logo: <CompanyLogoMclaren />,
  },
  {
    id: 'brands-company-pace',
    url: 'https://www.paceco.com/',
    logo: <CompanyLogoPace />,
  },
  {
    id: 'brands-company-campbells',
    url: 'https://www.campbellsoupcompany.com/',
    logo: <CompanyLogoCampbells />,
  },
  {
    id: 'brands-company-hawthorne',
    url: 'https://hrpliving.com/',
    logo: <CompanyLogoHawthorne />,
  },
  {
    id: 'brands-company-walmart',
    url: 'https://corporate.walmart.com/about',
    logo: <CompanyLogoWalmart />,
  },
  {
    id: 'brands-company-stryker',
    url: 'https://www.stryker.com/us/en/about.html',
    logo: <CompanyLogoStryker />,
  },
  {
    id: 'brands-company-bofa',
    url: 'https://about.bankofamerica.com/en/our-company',
    logo: <CompanyLogoBofA />,
  },
  {
    id: 'brands-company-jeffries',
    url: 'https://www.jefferies.com/about/',
    logo: <CompanyLogoJeffries />,
  },
  {
    id: 'brands-company-bloomberg',
    url: 'https://www.bloomberg.com/company/what-we-do/',
    logo: <CompanyLogoBloomberg />,
  },
];

export const HomeBrands = () => (
  <Section className="v2-home-brands">
    <div className="v2-home-brands-box">
      <Title className="v2-home-brands-title" h3>
        Trusted by Market Leaders: <span>Elevating Digital Presence for Renowned Brands.</span>
      </Title>
      <Text className="v2-home-brands-text">
        Renowned brands rely on front-end development expertise to elevate their digital presence
        with a focus on innovative design and exceptional user experience. Let's transform your web
        experience into a powerful tool.
      </Text>
    </div>
    <div className="v2-home-brands-box">
      {data.map((item) => (
        <a
          id={item.id}
          rel="noopener"
          key={item.id}
          href={item.url}
          target="_blank"
          className="v2-home-brands-tile"
          children={item.logo}
          tabIndex={0}
        />
      ))}
    </div>
  </Section>
);
