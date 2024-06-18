import React from 'react';
import { TableContextValue } from '../table-types';

const TableContext = React.createContext({} as TableContextValue);
const TableProvider = TableContext.Provider;
const useTableProvider = () => React.useContext(TableContext);

export { TableContext, TableProvider, useTableProvider };
