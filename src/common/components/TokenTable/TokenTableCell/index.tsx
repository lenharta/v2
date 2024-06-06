import { TokenTableCSS, TokenTableCellProps } from '../types';

const css: Partial<TokenTableCSS> = {
  cell: 'v2-token-table-cell',
};

type TokenTableCellFactory = React.FC<TokenTableCellProps>;

const TokenTableCell: TokenTableCellFactory = (props) => {
  const { children } = props;
  return <td className={css.cell}>{children}</td>;
};

export { TokenTableCell };
