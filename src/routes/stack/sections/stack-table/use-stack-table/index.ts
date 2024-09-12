import * as React from 'react';
import { StackTableItem } from '..';

function parseStackRowItem(item: StackTableItem) {
  return {
    row: item.id,
    cells: [
      { row: item.id, column: 'name', value: item.name },
      { row: item.id, column: 'category', value: item.category },
      { row: item.id, column: 'description', value: item.description },
      { row: item.id, column: 'website', value: item.website },
    ],
  };
}

export function useStackTable<T extends StackTableItem>(data: T[]) {
  const [state, setState] = React.useState(data);
  const [query, setQuery] = React.useState<string | null>(null);
  const [order, setOrder] = React.useState<'ascending' | 'descending'>();
  const [active, setActive] = React.useState<keyof T>();

  const isActive = (prop: keyof T) => prop === active;

  const sortAscending = (prop: keyof T) => {
    setActive(prop);
    setOrder('ascending');
    setState((current) => {
      const clone = [...current];
      clone.sort((a, b) => {
        if ((a[prop] as string).toLowerCase() < (b[prop] as string).toLowerCase()) return 1;
        if ((a[prop] as string).toLowerCase() > (b[prop] as string).toLowerCase()) return -1;
        return 0;
      });
      return clone;
    });
  };

  const sortDescending = (prop: keyof T) => {
    setActive(prop);
    setOrder('descending');
    setState((current) => {
      const clone = [...current];
      clone.sort((a, b) => {
        if ((a[prop] as string).toLowerCase() < (b[prop] as string).toLowerCase()) return -1;
        if ((a[prop] as string).toLowerCase() > (b[prop] as string).toLowerCase()) return 1;
        return 0;
      });
      return clone;
    });
  };

  const setAscending = React.useCallback((prop: keyof T) => sortAscending(prop), [order]);
  const setDescending = React.useCallback((prop: keyof T) => sortDescending(prop), [order]);

  const reset = () => {
    setActive(undefined);
    setOrder(undefined);
    setQuery(null);
    setState(data);
  };

  return {
    data: React.useMemo(
      () =>
        state.map((item) => {
          return parseStackRowItem(item);
        }),
      [state, order, active, query]
    ),
    query,
    order,
    active,
    isActive,
    sortAscending,
    sortDescending,
    setAscending,
    setDescending,
    reset,
  };
}
