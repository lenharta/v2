type InlineMediaQuery = {
  styles: React.CSSProperties;
  query: string;
};

type InlineStyle = {
  selector: string;
  styles?: React.CSSProperties | undefined;
  media?: InlineMediaQuery[] | undefined;
};

export type { InlineMediaQuery, InlineStyle };
