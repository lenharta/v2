import React from 'react';

type TokenTableCSS = Record<'root' | 'row' | 'cell' | 'head' | 'body' | 'foot' | 'swatch', string>;

interface TokenTableProps {
  children?: React.ReactNode | undefined;
}

interface TokenTableRowProps {
  children?: React.ReactNode | undefined;
}

interface TokenTableCellProps {
  children?: React.ReactNode | undefined;
}

interface TokenTableHeadProps {
  children?: React.ReactNode | undefined;
}

interface TokenTableBodyProps {
  children?: React.ReactNode | undefined;
}

interface TokenTableFootProps {
  children?: React.ReactNode | undefined;
}

export type {
  TokenTableCSS,
  TokenTableProps,
  TokenTableRowProps,
  TokenTableCellProps,
  TokenTableHeadProps,
  TokenTableBodyProps,
  TokenTableFootProps,
};
