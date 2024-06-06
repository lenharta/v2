import { TokenTableCSS, TokenTableRowProps } from '../types';

const css: Partial<TokenTableCSS> = {
  row: 'v2-token-table-row',
};

type TokenTableRowFactory = React.FC<TokenTableRowProps>;

const TokenTableRow: TokenTableRowFactory = (props) => {
  const { children } = props;
  return <tr className={css.row}>{children}</tr>;
};

export { TokenTableRow };
