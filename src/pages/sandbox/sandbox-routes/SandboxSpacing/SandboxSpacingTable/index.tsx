import React from 'react';
import { Theme } from '@/types';
import { objectKeys } from '@/utils';
import { TokenTable } from '@/common';
import { SandboxSpacingSwatch } from '../SandboxSpacingSwatch';

const useSpacingTokenData = (
  levels: Theme.Value16[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
) => {
  return React.useMemo(() => {
    return levels.map((i) => ({
      id: `row-${i}`,
      cells: {
        name: `Spacing ${i}`,
        token: `var(--s-${i})`,
        swatch: <SandboxSpacingSwatch level={i} />,
      },
    }));
  }, [levels]);
};

const SandboxSpacingTable = () => {
  const data = useSpacingTokenData();
  return (
    <TokenTable>
      <TokenTable.Head>
        <TokenTable.Row>
          <TokenTable.Cell>Name</TokenTable.Cell>
          <TokenTable.Cell>Token</TokenTable.Cell>
          <TokenTable.Cell>Swatch</TokenTable.Cell>
        </TokenTable.Row>
      </TokenTable.Head>
      <TokenTable.Body>
        {data.map(({ id, cells }) => (
          <TokenTable.Row key={id}>
            {objectKeys(cells).map((cell) => (
              <TokenTable.Cell key={[id, cell].join('')}>
                <React.Fragment>{cells[cell]}</React.Fragment>
              </TokenTable.Cell>
            ))}
          </TokenTable.Row>
        ))}
      </TokenTable.Body>
      <TokenTable.Foot>
        <TokenTable.Row>
          <TokenTable.Cell></TokenTable.Cell>
          <TokenTable.Cell></TokenTable.Cell>
          <TokenTable.Cell></TokenTable.Cell>
        </TokenTable.Row>
      </TokenTable.Foot>
    </TokenTable>
  );
};

export { SandboxSpacingTable };
