import * as React from 'react';
import { Page, Section } from '@/app';
import { Icon, Text, Title } from '@/core';
import { Link } from 'react-router-dom';
import { HomeHero } from './sections';
import clsx from 'clsx';

type HomeRouteFactory = React.FC<{}> & {};

const HomeOverview = () => {
  return (
    <div className="v2-home-overview">
      <div className="v2-home-overview-inner">
        <div className="v2-home-overview-banner v2-accent-elevated">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident in sint hic saepe
            fugiat reiciendis nisi? Dignissimos, quas aliquam aperiam corporis sint vel aspernatur
            fuga nobis, amet laboriosam distinctio dolorum.
          </Text>
        </div>
        <div className="v2-home-overview-link-group">
          <Link to="/" className="v2-home-overview-link v2-accent-elevated--interactive">
            <span>See Experience</span>
            <Icon name="arrow-northeast" />
          </Link>
          <Link to="/" className="v2-home-overview-link v2-accent--interactive">
            <span>See Projects</span>
            <Icon name="arrow-northeast" />
          </Link>
        </div>
      </div>
    </div>
  );
};

interface SchemeSwatchProps {
  scheme?:
    | 'base-default'
    | 'base-default-interactive'
    | 'base-elevated'
    | 'base-elevated-interactive'
    | 'accent-default'
    | 'accent-default-interactive'
    | 'accent-elevated'
    | 'accent-elevated-interactive'
    | undefined;
}

const SchemeSwatch = (props: SchemeSwatchProps) => {
  const { scheme = 'base-primary' } = props;
  const tabIndex = scheme.includes('interactive') ? 0 : undefined;

  return (
    <div className={clsx('v2-scheme-swatch', `v2-${scheme}`)} tabIndex={tabIndex}>
      <div className="v2-scheme-swatch-inner">
        {scheme}
        <Icon name="shape-circle" type="fill" />
      </div>
    </div>
  );
};

const HomeRoute: HomeRouteFactory = ({}) => (
  <Page>
    <HomeHero />
    <HomeOverview />
    <div>
      <SchemeSwatch scheme="base-default" />
      <SchemeSwatch scheme="base-default-interactive" />
      <SchemeSwatch scheme="base-elevated" />
      <SchemeSwatch scheme="base-elevated-interactive" />

      <SchemeSwatch scheme="accent-default" />
      <SchemeSwatch scheme="accent-default-interactive" />
      <SchemeSwatch scheme="accent-elevated" />
      <SchemeSwatch scheme="accent-elevated-interactive" />
    </div>
  </Page>
);

HomeRoute.displayName = '@v2/Route.Home';
export { HomeRoute };
