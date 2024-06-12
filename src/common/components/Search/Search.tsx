import React from 'react';
import { Floating } from '@/core';
import { useNavigate } from 'react-router-dom';
import { useDispatchContext, useStateContext } from '@/app';
import { SearchResult } from './SearchResult';
import { SearchProps } from './search-types';
import { SearchBox } from './SearchBox';
import { SearchTarget } from './SearchTarget';

type SearchFactory = React.FC<SearchProps> & {
  Box: typeof SearchBox;
  Target: typeof SearchTarget;
  Result: typeof SearchResult;
};

const Search: SearchFactory = (props) => {
  const { scheme = 'primary-1-interactive', variant = 'elevated' } = props;

  const store = useStateContext();
  const dispatch = useDispatchContext();
  const navigate = useNavigate();

  const searchBoxRef = React.useRef<HTMLDivElement>(null);

  return (
    <React.Fragment>
      <Search.Box
        ref={searchBoxRef}
        store={store}
        scheme={scheme}
        variant={variant}
        dispatch={dispatch}
      />
      <Floating
        isOpen={store.resultOpen ? true : false}
        onChange={() => dispatch({ resultOpen: !store.resultOpen })}
        clickOutsideIgnoreRefs={[searchBoxRef]}
        placement="bottom-end"
        width={604}
        offset={{
          alignAxis: 0,
          crossAxis: 2,
          mainAxis: 2,
        }}
      >
        <Search.Target scheme={scheme} variant={variant} store={store} />

        <Search.Result
          store={store}
          scheme={scheme}
          variant={variant}
          dispatch={dispatch}
          navigate={navigate}
          items={[
            { label: 'Home', value: '/', icon: 'file-default' },
            { label: 'Experience', value: '/experience', icon: 'file-default' },
            { label: 'Projects', value: '/projects', icon: 'file-default' },
            { label: 'Sandbox', value: '/sandbox', icon: 'file-default' },
            { label: 'Toolbox', value: '/toolbox', icon: 'file-default' },
          ]}
        />
      </Floating>
    </React.Fragment>
  );
};

Search.Box = SearchBox;
Search.Target = SearchTarget;
Search.Result = SearchResult;
Search.displayName = '@v2/Search.Root';
export { Search };
