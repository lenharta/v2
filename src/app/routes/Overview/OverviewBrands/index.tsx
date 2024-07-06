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
} from '@/core';

const data = [
  {
    id: 'brands-company-transunion',
    logo: <CompanyLogoTransunion />,
  },
  {
    id: 'brands-company-mclaren',
    logo: <CompanyLogoMclaren />,
  },
  {
    id: 'brands-company-pace',
    logo: <CompanyLogoPace />,
  },
  {
    id: 'brands-company-campbells',
    logo: <CompanyLogoCampbells />,
  },
  {
    id: 'brands-company-hawthorne',
    logo: <CompanyLogoHawthorne />,
  },
  {
    id: 'brands-company-walmart',
    logo: <CompanyLogoWalmart />,
  },
  {
    id: 'brands-company-stryker',
    logo: <CompanyLogoStryker />,
  },
  {
    id: 'brands-company-bofa',
    logo: <CompanyLogoBofA />,
  },
  {
    id: 'brands-company-jeffries',
    logo: <CompanyLogoJeffries />,
  },
  {
    id: 'brands-company-bloomberg',
    logo: <CompanyLogoBloomberg />,
  },
];

const OverviewBrands: React.FC<{}> = ({}) => {
  return (
    <Page.Section className="v2-overview-brands">
      <Page.Headline id="overview-brands" order={3} title={`Clients & Brands`} />
      <div className="v2-overview-brands-layout">
        {data.map((item) => (
          <div key={item.id} className="v2-overview-brands-item">
            {item.logo}
          </div>
        ))}
      </div>
    </Page.Section>
  );
};

OverviewBrands.displayName = '@v2/Overview.Brands';
export { OverviewBrands };
