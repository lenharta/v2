import * as React from 'react';
import { StackTableHead } from './StackTableHead';
import { StackTableBody } from './StackTableBody';
import { useStackTable } from './use-stack-table';
import { STACK_TABLE_ROW_DATA } from '../data';

type StackTableFactory = React.FC<{}> & {
  Head: typeof StackTableHead;
  Body: typeof StackTableBody;
};

const StackTable: StackTableFactory = ({}) => {
  const table = useStackTable(STACK_TABLE_ROW_DATA);
  return (
    <div className="v2-stack-table">
      <table className="v2-stack-table-layout">
        <StackTable.Head
          order={table.order}
          active={table.active}
          isActive={table.isActive}
          setAscendingData={table.setAscendingData}
          setDescendingData={table.setDescendingData}
        />
        <StackTable.Body data={table.state} getAccentColor={table.getAccentColor} />
      </table>
    </div>
  );
};

StackTable.Head = StackTableHead;
StackTable.Body = StackTableBody;
StackTable.displayName = '@v2/Stack.Table';
export { StackTable };
