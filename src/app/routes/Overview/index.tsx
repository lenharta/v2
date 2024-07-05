import * as React from 'react';
import { Page } from '@/app';
import { OverviewHero } from './OverviewHero';
import { OverviewIntro } from './OverviewIntro';
import { OverviewStats } from './OverviewStats';
import { OverviewResume } from './OverviewResume';
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
} from '@/core/components/Icon/companies';

type OverviewFactory = React.FC<{}> & {
  Hero: typeof OverviewHero;
  Intro: typeof OverviewIntro;
  Stats: typeof OverviewStats;
  Resume: typeof OverviewResume;
};

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

const OverviewBrands = () => {
  return (
    <Page.Section className="v2-overview-brands">
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

const Overview: OverviewFactory = ({}) => (
  <Page>
    <Overview.Hero />
    <Overview.Intro />
    <Overview.Stats />
    <OverviewBrands />
    <Overview.Resume />
  </Page>
);

Overview.Hero = OverviewHero;
Overview.Intro = OverviewIntro;
Overview.Stats = OverviewStats;
Overview.Resume = OverviewResume;
Overview.displayName = '@v2/Overview';
export { Overview };
