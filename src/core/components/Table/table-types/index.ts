interface TableContextValue {
  getTableId: {
    bodyRow: (id: string) => string;
    bodyCell: (id: string) => string;
    headCell: (id: string) => string;
    footCell: (id: string) => string;
  };
}

type TableCellItem = {
  id: string;
  label: string;
  value: string | number | readonly string[];
};

type TableRowItem = {
  id: string;
  label: string;
  value: string | number | readonly string[];
  items: TableCellItem[];
};

interface TableProps {
  columns?: TableCellItem[] | undefined;
  rows?: TableRowItem[] | undefined;
  zebra?: boolean | undefined;
}

interface TableHeadProps {}

interface TableBodyProps {}

interface TableFootProps {}

interface TableRowProps {}

interface TableColProps {}

interface TableCellProps {}

export type {
  TableHeadProps,
  TableBodyProps,
  TableFootProps,
  TableRowProps,
  TableColProps,
  TableCellProps,
  TableContextValue,
  TableProps,
};
