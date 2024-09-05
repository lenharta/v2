import * as React from 'react';
import { Core } from '@/types';
import { TableTh } from './TableTh';
import { TableTr } from './TableTr';
import { TableTd } from './TableTd';
import { TableRoot } from './TableRoot';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableFoot } from './TableFoot';

type TableFactory = React.FC<Core.TableProps> & {
  Tr: typeof TableTr;
  Td: typeof TableTd;
  Th: typeof TableTh;
  Body: typeof TableBody;
  Foot: typeof TableFoot;
  Head: typeof TableHead;
  Root: typeof TableRoot;
};

export const Table: TableFactory = ({
  data,
  className,
  rowBorder,
  rowStriped,
  stickyHeader,
  ...props
}) => {
  return (
    <Table.Root
      {...props}
      className={className}
      rowBorder={rowBorder}
      rowStriped={rowStriped}
      stickyHeader={stickyHeader}
    >
      {data?.head && (
        <Table.Head>
          <Table.Tr>
            {data.head.map((cell, cellIndex) => (
              <Table.Th key={cellIndex}>{cell}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Head>
      )}

      {data?.body && (
        <Table.Body>
          {data.body.map((row, rowIndex) => (
            <Table.Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Table.Td key={cellIndex}>{cell}</Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Body>
      )}

      {data?.foot && (
        <Table.Foot>
          <Table.Tr>
            {data.foot.map((cell, cellIndex) => (
              <Table.Td key={cellIndex}>{cell}</Table.Td>
            ))}
          </Table.Tr>
        </Table.Foot>
      )}
    </Table.Root>
  );
};

Table.Tr = TableTr;
Table.Td = TableTd;
Table.Th = TableTh;
Table.Body = TableBody;
Table.Foot = TableFoot;
Table.Head = TableHead;
Table.Root = TableRoot;
Table.displayName = '@v2/Table.Renderer';
