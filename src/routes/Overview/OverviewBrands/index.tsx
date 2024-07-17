import { Page } from '@app/components';
import { Text, Title } from '@core';
import { OVERVIEW_BRANDS_DATA } from '../data';

interface OverviewBrandsBannerProps {
  children?: React.ReactNode;
}

interface OverviewBrandsItem {
  logo: React.ReactNode;
  url: string;
  id: string;
}

interface OverviewBrandsLayoutProps {
  items: OverviewBrandsItem[];
}

const OverviewBrandsBanner: React.FC<OverviewBrandsBannerProps> = (props) => {
  return <header className="v2-overview-brands-banner">{props.children}</header>;
};

const OverviewBrandsLayout: React.FC<OverviewBrandsLayoutProps> = (props) => {
  return (
    <div className="v2-overview-brands-layout">
      {props.items.map((item) => {
        return (
          <a
            id={item.id}
            key={item.id}
            rel="noopener"
            href={item.url}
            target="_blank"
            className="v2-overview-brands-item"
            children={item.logo}
          />
        );
      })}
    </div>
  );
};

interface OverviewBrandsProps {}

type OverviewBrandsFactory = React.FC<OverviewBrandsProps> & {
  Banner: typeof OverviewBrandsBanner;
  Layout: typeof OverviewBrandsLayout;
};

const OverviewBrands: OverviewBrandsFactory = (props) => {
  const { ...forwardedProps } = props;
  return (
    <Page.Section className="v2-overiew-brands" {...forwardedProps}>
      <Page.Headline id="overview-brands" order={2} title={`Clients & Brands`} />

      <OverviewBrands.Banner>
        <Title h3>
          Trusted by Market Leaders: <span>Elevating Digital Presence for Renowned Brands.</span>
        </Title>
        <Text>
          Renowned brands rely on front-end development expertise to elevate their digital presence
          with a focus on innovative design and exceptional user experience. Let's transform your
          web experience into a powerful tool.
        </Text>
      </OverviewBrands.Banner>

      <OverviewBrands.Layout items={OVERVIEW_BRANDS_DATA} />
    </Page.Section>
  );
};

OverviewBrands.Banner = OverviewBrandsBanner;
OverviewBrands.Layout = OverviewBrandsLayout;
OverviewBrands.displayName = '@v2/Overview.Brands';
export { OverviewBrands };
