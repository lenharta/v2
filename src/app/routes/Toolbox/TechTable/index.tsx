import React from 'react';
import { Table, Textbox } from '@/core';
import { Action, Section } from '@/app/common';

import {
  DATA_TOOLBOX_TABLE_ITEMS,
  DATA_TOOLBOX_TABLE_COLORS,
  DATA_TOOLBOX_TABLE_HEADERS,
} from '@/data';

import { TechTableTagCell } from '../TechTableTagCell';
import { TechTableColorCell } from '../TechTableColorCell';
import { TechTableExternalCell } from '../TechTableExternalCell';

type TechTableComponent = React.FC<{}> & {
  TagCell: typeof TechTableTagCell;
  ColorCell: typeof TechTableColorCell;
  ExternalCell: typeof TechTableExternalCell;
};

export const TechTable: TechTableComponent = () => {
  const [query, setQuery] = React.useState<string>();

  return (
    <Section>
      <div className="tech-table">
        <div className="tech-table-controls">
          <Action icon="filter" />
          <Textbox
            value={query}
            onChange={(event) => setQuery(event.currentTarget.value)}
            placeholder="Find..."
          />
        </div>
        <Table>
          <Table.Head>
            <Table.Row>
              {DATA_TOOLBOX_TABLE_HEADERS.map((item) => (
                <Table.Header
                  id={item.id}
                  key={item.id}
                  children={item.label}
                  className="tech-table-header"
                />
              ))}
            </Table.Row>
          </Table.Head>

          <Table.Body>
            {DATA_TOOLBOX_TABLE_ITEMS.map((item) => (
              <Table.Row key={item.name}>
                <TechTable.ColorCell color={DATA_TOOLBOX_TABLE_COLORS[item.category]} />

                <Table.Cell className="tech-table-cell">
                  <span>{item.name}</span>
                </Table.Cell>

                <Table.Cell className="tech-table-cell">
                  <span>{item.description}</span>
                </Table.Cell>

                <TechTable.TagCell
                  items={item.keywords.split('/')}
                  color={DATA_TOOLBOX_TABLE_COLORS[item.category]}
                />

                <TechTable.ExternalCell name={item.name} url={item.website} />
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Section>
  );
};

TechTable.displayName = '@v2/app/TechTable';
TechTable.ExternalCell = TechTableExternalCell;
TechTable.ColorCell = TechTableColorCell;
TechTable.TagCell = TechTableTagCell;
