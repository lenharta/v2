interface TableData {
  head?: React.ReactNode[] | undefined;
  body?: React.ReactNode[][] | undefined;
  foot?: React.ReactNode[] | undefined;
}

interface TableThemeProps {
  rowBorder?: boolean | undefined;
  rowStriped?: 'even' | 'odd' | undefined;
  stickyHeader?: boolean | undefined;
}

interface TableTdProps {}

interface TableTrProps {}

interface TableHeadProps {}

interface TableThProps {}

interface TableFootProps {}

interface TableBodyProps {}

interface TableRootProps extends TableThemeProps {
  className?: string | undefined;
}

interface TableProps extends TableThemeProps {
  data?: TableData | undefined;
  className?: string | undefined;
}

interface TableContext extends TableThemeProps {}

export type {
  TableData,
  TableProps,
  TableContext,
  TableRootProps,
  TableHeadProps,
  TableFootProps,
  TableBodyProps,
  TableTrProps,
  TableTdProps,
  TableThProps,
};
