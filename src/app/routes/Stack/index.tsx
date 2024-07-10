import * as React from 'react';
import { Page } from '@/app';
import { StackHero } from './StackHero';
import { StackIntro } from './StackIntro';

type StackFactory = React.FC<{}> & {
  Hero: typeof StackHero;
  Intro: typeof StackIntro;
};

interface StackTableProps {}
interface StackTableHeaderProps {}
interface StackTableBodyProps {}
interface StackTableRowProps {}
interface StackTableCellProps {}
interface StackTableFooterProps {}

type StackTableFactory = React.FC<StackTableProps> & {};
type StackTableHeaderFactory = React.FC<StackTableHeaderProps> & {};
type StackTableBodyFactory = React.FC<StackTableBodyProps> & {};
type StackTableRowFactory = React.FC<StackTableRowProps> & {};
type StackTableCellFactory = React.FC<StackTableCellProps> & {};
type StackTableFooterFactory = React.FC<StackTableFooterProps> & {};

const StackTable = () => {};

const StackTableHeader = () => {};

const StackTableBody = () => {};

const StackTableRow = () => {};

const StackTableCell = () => {};

const StackTableFooter = () => {};

const Stack: StackFactory = ({}) => (
  <Page>
    <Stack.Hero />
    <Stack.Intro />
  </Page>
);

Stack.Hero = StackHero;
Stack.Intro = StackIntro;
Stack.displayName = '@v2/Stack.Route';
export { Stack };
