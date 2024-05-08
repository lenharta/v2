import { Site } from '@/types';
import React from 'react';

export interface SearchStateValue {
  query: string;
  results: Site.SearchItem[];
}

export interface SearchContextValue {}

export const SearchContext = React.createContext({} as SearchContextValue);
export const useSearchContext = () => React.useContext(SearchContext);
