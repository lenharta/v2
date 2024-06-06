import { TokenTableCSS, TokenTableFootProps } from '../types';

const css: Partial<TokenTableCSS> = {
  foot: 'v2-token-table-foot',
};

type TokenTableFootFactory = React.FC<TokenTableFootProps>;

const TokenTableFoot: TokenTableFootFactory = (props) => {
  const { children } = props;
  return <tfoot className={css.foot}>{children}</tfoot>;
};

export { TokenTableFoot };
