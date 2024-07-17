import { Page } from '@app';
import { Title } from '@core';

const ErrorHero: React.FC<{}> = ({}) => (
  <Page.Hero>
    <Title h1>Page Not Found | 404</Title>
  </Page.Hero>
);

ErrorHero.displayName = '@v2/Error.Hero';
export { ErrorHero };
