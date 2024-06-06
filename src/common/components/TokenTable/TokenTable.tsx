import { TokenTableRow } from './TokenTableRow';
import { TokenTableCell } from './TokenTableCell';
import { TokenTableBody } from './TokenTableBody';
import { TokenTableFoot } from './TokenTableFoot';
import { TokenTableHead } from './TokenTableHead';
import { TokenTableProps } from './types';

const css = {
  root: 'v2-token-table',
  row: 'v2-token-table-row',
  cell: 'v2-token-table-cell',
  head: 'v2-token-table-head',
  body: 'v2-token-table-body',
  foot: 'v2-token-table-foot',
};

type TokenTableFactory = React.FC<TokenTableProps> & {
  Row: typeof TokenTableRow;
  Cell: typeof TokenTableCell;
  Head: typeof TokenTableHead;
  Body: typeof TokenTableBody;
  Foot: typeof TokenTableFoot;
};

const TokenTable: TokenTableFactory = (props) => {
  const { children } = props;
  return <table className={css.root}>{children}</table>;
};

TokenTable.Row = TokenTableRow;
TokenTable.Cell = TokenTableCell;
TokenTable.Body = TokenTableBody;
TokenTable.Foot = TokenTableFoot;
TokenTable.Head = TokenTableHead;

TokenTable.displayName = '@v2/TokenTable.Root';

export { TokenTable };
