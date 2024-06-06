import { TokenTableBodyProps, TokenTableCSS } from '../types';

const css: Partial<TokenTableCSS> = {
  body: 'v2-token-table-body',
};

type TokenTableBodyFactory = React.FC<TokenTableBodyProps>;

const TokenTableBody: TokenTableBodyFactory = (props) => {
  const { children } = props;
  return <tbody className={css.body}>{children}</tbody>;
};

export { TokenTableBody };
