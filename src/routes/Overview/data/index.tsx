import {
  CompanyLogoBofA,
  CompanyLogoPace,
  CompanyLogoStryker,
  CompanyLogoTransunion,
  CompanyLogoBloomberg,
  CompanyLogoCampbells,
  CompanyLogoHawthorne,
  CompanyLogoJeffries,
  CompanyLogoMclaren,
  CompanyLogoWalmart,
} from '@/core';

const OVERVIEW_BRANDS_DATA = [
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

const OVERVIEW_EXPERIENCE_DATA = [
  {
    id: `overview-resume-doran`,
    title: `Doran Jones, Inc.`,
    location: `New York, New York`,
    text: `Founded in 2010, Doran Jones, Inc. is a financial services Data Engineering and Application Development firm. Specializing in Capital Markets, Risk, and Regulatory Compliance, Doran delivers high-quality, affordable solutions that ensured compliance and mitigated risk in dynamic environments.`,
  },
  {
    id: `overview-resume-antra`,
    title: `Antra, Inc.`,
    location: `Sterling, Virginia`,
    text: `Antra Inc. addresses the crucial gap between modern technology adoption and business growth by providing strategic solutions to seamlessly connect technology with business objectives. Antra offers a full range of IT services in a cost-effective manner, combining technical knowledge with business acumen to drive success for our clients.`,
  },
  {
    id: `overview-resume-pace`,
    title: `Pace Communications`,
    location: `Greensboro, North Carolina`,
    text: `One of the world's leading growth marketing agencies. With deep strength in content, brand storytelling and integrated marketing, Pace designs, builds, and manages leading websites and digital story experiences for global clients through custom web development and producing award-winning integrated brand narratives.`,
  },
  {
    id: `overview-resume-hawthorne`,
    title: `Hawthorne Residential Partners`,
    location: `Greensboro, North Carolina`,
    text: `Hawthorne Residential Partners is a privately held property management firm that provides services in the apartment industry across the Southeast and Texas. Their innovative approach includes resident web apps and portals, enhancing tenant experience and operational efficiency through advanced technology solutions.`,
  },
];

const OVERVIEW_STATS_DATA = [
  {
    value: `5+ yrs`,
    title: `Development Experience`,
    text: `With more than half a decade in the industry, I bring a wealth of knowledge and hands-on experience in front-end development. My journey has seen the evolution of web technologies, enabling me to stay ahead of trends and deliver modern, efficient solutions.`,
    id: `overview-experience-card`,
  },
  {
    value: `$14B`,
    title: `Market Capitalization`,
    text: `Proud to have contributed to projects for clients with a combined market capitalization exceeding $14 billion. This experience underscores my capability to handle high-stakes, high-impact projects with professionalism and technical proficiency.`,
    id: `overview-marketcap-card`,
  },
  {
    value: `120+`,
    title: `Production Components`,
    text: `Developed and delivered over 120 reusable production components, enhancing codebase maintainability and scalability. Recently created a custom, fully-featured library for a Fortune 500 company in the financial sector.`,
    id: `overview-components-card`,
  },
  {
    value: `1852`,
    title: `Cups Of Coffee`,
    text: `Staying current with the latest industry trends and technologies is essential for crafting relevant and effective project solutions. This commitment demands extensive hours, but my dedication to excellence and a good cup of coffee, always keeps me motivated.`,
    id: `overview-coffees-card`,
  },
];

export { OVERVIEW_BRANDS_DATA, OVERVIEW_EXPERIENCE_DATA, OVERVIEW_STATS_DATA };
