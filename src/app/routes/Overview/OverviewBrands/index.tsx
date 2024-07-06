import { Page } from '@/app';
import {
  CompanyLogoBloomberg,
  CompanyLogoBofA,
  CompanyLogoCampbells,
  CompanyLogoHawthorne,
  CompanyLogoJeffries,
  CompanyLogoMclaren,
  CompanyLogoPace,
  CompanyLogoStryker,
  CompanyLogoTransunion,
  CompanyLogoWalmart,
  Text,
  Title,
  UnstyledButton,
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

const OverviewBrands: React.FC<{}> = ({}) => {
  return (
    <Page.Section className="v2-overview-brands">
      <Page.Headline id="overview-brands" order={2} title={`Clients & Brands`} />

      <header className="v2-overview-brands-banner">
        <Title h3>
          Trusted by Market Leaders: <span>Elevating Digital Presence for Renowned Brands.</span>
        </Title>
        <Text>
          Renowned brands rely on front-end development expertise to elevate their digital presence
          with a focus on innovative design and exceptional user experience. Let's transform your
          web experience into a powerful tool.
        </Text>
      </header>

      <div className="v2-overview-brands-layout">
        {data.map((item) => (
          <a
            key={item.id}
            href="#"
            // href={item.url}
            className="v2-overview-brands-item"
          >
            {item.logo}
          </a>
        ))}
      </div>
    </Page.Section>
  );
};

OverviewBrands.displayName = '@v2/Overview.Brands';
export { OverviewBrands };
