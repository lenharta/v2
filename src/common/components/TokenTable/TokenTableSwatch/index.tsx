import { Theme } from '@/types';
import { TokenTableCSS } from '../types';

const css: Partial<TokenTableCSS> = {
  swatch: 'v2-token-table-swatch',
};

type TokenProps = {
  s: Theme.Value16;
  fw: Exclude<Theme.Value6, '6'>;
  fz: Theme.Value16;
  style: React.CSSProperties;
};

type TokenTableSwatchProps = TokenProps & {
  style?: React.CSSProperties | undefined;
  children?: React.ReactNode | undefined;
};

type TokenTableSwatchFactory = React.FC<TokenTableSwatchProps>;

function getToken(value: any) {
  return `var(--${value.toString()})`;
}

function useTokenSwatchStyles(props: TokenProps): React.CSSProperties {
  const { s, fw, fz, style } = props;

  let payload: React.CSSProperties = {};

  if (s) payload = { height: getToken(s), width: getToken(s) };

  if (fz) payload = { fontSize: getToken(fz) };

  if (fw) payload = { fontWeight: getToken(fw) };

  payload = {
    ...style,
    ...payload,
  };

  return payload;
}

const TokenTableSwatch: TokenTableSwatchFactory = (props) => {
  const { fw, fz, s, style, children } = props;
  const payload = useTokenSwatchStyles({ fw, fz, s, style });
  return (
    <div style={payload} className={css.swatch}>
      {children}
    </div>
  );
};

export { TokenTableSwatch };
