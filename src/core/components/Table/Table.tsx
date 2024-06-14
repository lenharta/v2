import { TableProps } from './table-types';
import { TableProvider } from './table-context';

const Table: React.FC<TableProps> & {} = (props) => {
  const {} = props;
  return (
    <table>
      <TableProvider value={{}}></TableProvider>
    </table>
  );
};

Table.displayName = '@v2/Table';
export { Table };
