const SearchContext = React.createContext({});
const SearchProvider = SearchContext.Provider;
const useSearchContext = () => React.useContext(SearchContext);
