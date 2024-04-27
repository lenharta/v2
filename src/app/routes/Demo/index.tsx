import * as React from 'react';
import { objectKeys } from '@/utils';
import { Icon, Image, Table } from '@/core';
import { Action, Page, Section } from '@/app/common';

type DemoRouteComponent = React.FC<{}>;

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function useTableSelection() {
  const [state, dispatch] = React.useState<string[]>([]);

  const includes = (value: string) => {
    return state.includes(value) ? true : false;
  };

  const filter = (value: string) => {
    const payload = state.filter((v) => v !== value);
    return includes(value) ? payload : state;
  };

  const update = (value: string) => {
    const payload = [...state, value];
    dispatch(!includes(value) ? payload : filter(value));
  };

  return { update };
}

const DemoTable = () => {
  const rowRef = React.useRef<HTMLTableRowElement>(null);
  const [rowRefs, setRowRefs] = React.useState<Record<string, HTMLElement | null>>({});
  const [selected, setSelected] = React.useState<string[]>([]);

  const updateSelection = (value: string) => {
    const update = [...selected, value];
    const included = selected.includes(value);
    const filter = selected.filter((v) => v !== value);
    return setSelected(included ? filter : update);
  };

  const onChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    updateSelection(event.currentTarget.name);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const Enter = () => updateSelection(event.currentTarget.name);
    const Space = () => updateSelection(event.currentTarget.name);
    return { Space, Enter }[event.code];
  };

  const setRowElements = (element: HTMLElement | null, val: string) => {
    rowRefs[val] = element;
    setRowRefs(rowRefs);
  };

  return (
    <Section>
      <Table>
        <Table.Head>
          <Table.Row>
            {['Checked', ...objectKeys(elements[0])].map((item) => (
              <Table.Header key={item} children={item} />
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {elements.map((item) => (
            <Table.Row
              key={item.name}
              ref={(node) => setRowElements(node, item.name)}
              data-row-selected={selected.includes(item.name) || undefined}
            >
              <Table.Cell>
                <button
                  role="checkbox"
                  name={item.name}
                  value={item.name}
                  onClick={onChange}
                  onKeyDown={onKeyDown}
                  children={
                    selected.includes(item.name) ? (
                      <Icon name="checkbox_checked" />
                    ) : (
                      <Icon name="checkbox_unchecked" />
                    )
                  }
                />
              </Table.Cell>
              <Table.Cell>{item.position}</Table.Cell>
              <Table.Cell>{item.mass}</Table.Cell>
              <Table.Cell>{item.symbol}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Section>
  );
};

const DemoImage = () => {
  const defaultSrc = 'https://placehold.co/600x400?text=Placeholder';
  return (
    <Section>
      <Image alt="image" src={defaultSrc} />
    </Section>
  );
};

export const Demo: DemoRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero title="Demo" />
      <Page.Content>
        <DemoTable />
        <DemoImage />
      </Page.Content>
    </Page>
  );
};

Demo.displayName = '@v2/app/Route.Demo';
