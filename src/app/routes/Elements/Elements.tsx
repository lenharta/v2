import * as React from 'react';
import * as Router from 'react-router-dom';

import { Page } from '@/app';
import { ElementsRoot } from './ElementsRoot';
import { ElementsAction } from './ElementsAction';
import { ElementsButton } from './ElementsButton';
import { ElementsAccordion } from './ElementsAccordion';
import { ElementsControl } from './ElementsControl';
import { ElementsDivider } from './ElementsDivider';
import { ElementsSelect } from './ElementsSelect';
import { ElementsText } from './ElementsText';
import { ElementsTitle } from './ElementsTitle';
import { ElementsLabel } from './ElementsLabel';
import { ElementsGroup } from './ElementsGroup';
import { ElementsStack } from './ElementsStack';

type ElementsFactory = React.FC<{}> & {
  Root: typeof ElementsRoot;
  Accordion: typeof ElementsAccordion;
  Action: typeof ElementsAction;
  Button: typeof ElementsButton;
  Control: typeof ElementsControl;
  Divider: typeof ElementsDivider;
  Select: typeof ElementsSelect;
  Group: typeof ElementsGroup;
  Stack: typeof ElementsStack;
  Text: typeof ElementsText;
  Title: typeof ElementsTitle;
  Label: typeof ElementsLabel;
};

const Elements: ElementsFactory = ({}) => (
  <Page>
    <Router.Outlet />
  </Page>
);

Elements.Root = ElementsRoot;
Elements.Accordion = ElementsAccordion;
Elements.Action = ElementsAction;
Elements.Button = ElementsButton;
Elements.Control = ElementsControl;
Elements.Divider = ElementsDivider;
Elements.Select = ElementsSelect;
Elements.Group = ElementsGroup;
Elements.Stack = ElementsStack;
Elements.Text = ElementsText;
Elements.Title = ElementsTitle;
Elements.Label = ElementsLabel;
Elements.displayName = '@v2/Elements.Route';
export { Elements };
