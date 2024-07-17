import * as React from 'react';
import { Page } from '@app';
import { ErrorHero } from './ErrorHero';
import { ErrorBanner } from './ErrorBanner';

type ErrorFactory = React.FC<{}> & {
  Hero: typeof ErrorHero;
  Banner: typeof ErrorBanner;
};

const Error: ErrorFactory = ({}) => {
  return (
    <Page>
      <Error.Hero />
      <Error.Banner />
    </Page>
  );
};

Error.Hero = ErrorHero;
Error.Banner = ErrorBanner;
Error.displayName = '@v2/Error.Route';
export { Error };
