import * as Logo from '@/core/components/Icon/companies';
import { Text, Title } from '@/core/components';
import { Headline, Section } from '@/app';

const data = [
  {
    id: 'brands-company-transunion',
    url: 'https://www.transunion.com/business',
    logo: <Logo.CompanyLogoTransunion />,
    label: 'Transunion',
  },
  {
    id: 'brands-company-mclaren',
    url: 'https://mclarenss.com/',
    logo: <Logo.CompanyLogoMclaren />,
    label: 'Mclaren Solutions',
  },
  {
    id: 'brands-company-pace',
    url: 'https://www.paceco.com/',
    logo: <Logo.CompanyLogoPace />,
    label: 'Pace Communications',
  },
  {
    id: 'brands-company-campbells',
    url: 'https://www.campbellsoupcompany.com/',
    logo: <Logo.CompanyLogoCampbells />,
    label: 'Campbells Foods',
  },
  {
    id: 'brands-company-hawthorne',
    url: 'https://hrpliving.com/',
    logo: <Logo.CompanyLogoHawthorne />,
    label: ' Hawthorne Residential Partners',
  },
  {
    id: 'brands-company-walmart',
    url: 'https://corporate.walmart.com/about',
    logo: <Logo.CompanyLogoWalmart />,
    label: 'Walmart',
  },
  {
    id: 'brands-company-stryker',
    url: 'https://www.stryker.com/us/en/about.html',
    logo: <Logo.CompanyLogoStryker />,
    label: 'Stryker',
  },
  {
    id: 'brands-company-bofa',
    url: 'https://about.bankofamerica.com/en/our-company',
    logo: <Logo.CompanyLogoBofA />,
    label: 'Bank of America',
  },
  {
    id: 'brands-company-jeffries',
    url: 'https://www.jefferies.com/about/',
    logo: <Logo.CompanyLogoJeffries />,
    label: 'Jeffries',
  },
  {
    id: 'brands-company-bloomberg',
    url: 'https://www.bloomberg.com/company/what-we-do/',
    logo: <Logo.CompanyLogoBloomberg />,
    label: 'Bloomberg',
  },
];

export const HomeBrands = () => (
  <>
    <Headline className="v2-home-brands-headline" title="Brands" href="home-brands" order=".03" />
    <Section className="v2-home-brands">
      <div className="v2-home-brands-banner">
        <Title className="v2-home-brands-banner-title" h3>
          Trusted by Market Leaders: <span>Elevating Digital Presence for Renowned Brands.</span>
        </Title>
        <Text className="v2-home-brands-banner-text">
          Proud to be trusted by renowned brands that rely on front-end development expertise to
          elevate their digital presence with a focus on innovative design and exceptional user
          experience. Let's transform your web experience into a powerful tool.
        </Text>
      </div>
      <div className="v2-home-brands-tiles">
        {data.map(({ id, url, logo, label }) => (
          <a
            id={id}
            key={id}
            rel="noopener"
            href={url}
            title={label}
            target="_blank"
            className="v2-home-brands-tile"
            aria-label={label}
            tabIndex={0}
          >
            {logo}
          </a>
        ))}
      </div>
    </Section>
  </>
);
