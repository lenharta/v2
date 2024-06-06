import { TokenTableCSS, TokenTableHeadProps } from '../types';

const css: Partial<TokenTableCSS> = {
  head: 'v2-token-table-head',
};

type TokenTableHeadFactory = React.FC<TokenTableHeadProps>;

const TokenTableHead: TokenTableHeadFactory = (props) => {
  const { children } = props;
  return <thead className={css.head}>{children}</thead>;
};

export { TokenTableHead };
