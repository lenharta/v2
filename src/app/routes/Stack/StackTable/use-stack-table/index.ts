import * as React from 'react';
import { Theme } from '@/types';
import { StackCategory, StackItem } from '../types';

const STACK_TABLE_CATEGORY_COLORS: Record<StackCategory, Theme.Color> = {
  framework: 'blue',
  language: 'mint',
  design: 'pink',
  testing: 'yellow',
  productivity: 'green',
  runtime: 'teal',
  versioning: 'orange',
  editor: 'indigo',
  tool: 'red',
  devops: 'brown',
  cloud: 'cyan',
  database: 'purple',
};

function useStackTable<T extends StackItem = StackItem>(data: T[]) {
  const [state, setState] = React.useState(data);
  const [query, setQuery] = React.useState<string | null>(null);
  const [order, setOrder] = React.useState<'ascending' | 'descending'>();
  const [active, setActive] = React.useState<keyof T>();

  const isActive = (prop: keyof StackItem) => prop === active;

  const sortAscendingData = (prop: keyof T) => {
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

  const sortDescendingData = (prop: keyof T) => {
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

  const setAscendingData = React.useCallback(
    (prop: keyof T) => order !== 'ascending' && sortAscendingData(prop),
    [order]
  );

  const setDescendingData = React.useCallback(
    (prop: keyof T) => order !== 'descending' && sortDescendingData(prop),
    [order]
  );

  const resetData = () => {
    setActive(undefined);
    setOrder(undefined);
    setQuery(null);
    setState(data);
  };

  const getAccentColor = (type: T['type'] = 'language') => {
    return STACK_TABLE_CATEGORY_COLORS[type];
  };

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  return {
    state,
    order,
    query,
    active,
    setState,
    setOrder,
    setQuery,
    setActive,
    isActive,
    resetData,
    sortDescendingData,
    sortAscendingData,
    setDescendingData,
    setAscendingData,
    getAccentColor,
  };
}

export { useStackTable };
