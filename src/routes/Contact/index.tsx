import * as React from 'react';
import { Page } from '@app/components';
import { ContactHero } from './ContactHero';

type ContactFactory = React.FC<{}> & {
  Hero: typeof ContactHero;
};

const Contact: ContactFactory = ({}) => (
  <Page>
    <Contact.Hero />
  </Page>
);

Contact.Hero = ContactHero;
Contact.displayName = '@v2/Contact.Route';
export { Contact };
