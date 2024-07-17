import * as React from 'react';
import * as Router from 'react-router-dom';

import { Page } from '@app';
import { Text, Title } from '@core';

type ErrorBannerFactory = React.FC<{}> & {};

const ErrorBanner: ErrorBannerFactory = ({}) => {
  const homePageLink = <Router.Link to="/">home page.</Router.Link>;

  return (
    <Page.Section>
      <Title h2>Sorry, we couldn't find that page.</Title>
      <Text>
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable. Try searching for it or go back to the {homePageLink}
      </Text>
    </Page.Section>
  );
};

ErrorBanner.displayName = '@v2/Error.Banner';
export { ErrorBanner };
