import * as React from 'react';
import { createEventCallback, objectKeys } from '@/utils';
import { ICON, Icon, Image, Table, Text, Title } from '@/core';
import { Action, Page, Section } from '@/app/common';
import { Factory } from '@/types';
import { useNavigate } from 'react-router-dom';

type DemoRouteComponent = React.FC<{}>;

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function useTableSelection() {
  const [state, dispatch] = React.useState<string[]>([]);

  const includes = (value: string) => {
    return state.includes(value) ? true : false;
  };

  const filter = (value: string) => {
    const payload = state.filter((v) => v !== value);
    return includes(value) ? payload : state;
  };

  const update = (value: string) => {
    const payload = [...state, value];
    dispatch(!includes(value) ? payload : filter(value));
  };

  return { update };
}

const DemoTable = () => {
  const rowRef = React.useRef<HTMLTableRowElement>(null);
  const [rowRefs, setRowRefs] = React.useState<Record<string, HTMLElement | null>>({});
  const [selected, setSelected] = React.useState<string[]>([]);

  const updateSelection = (value: string) => {
    const update = [...selected, value];
    const included = selected.includes(value);
    const filter = selected.filter((v) => v !== value);
    return setSelected(included ? filter : update);
  };

  const onChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    updateSelection(event.currentTarget.name);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const Enter = () => updateSelection(event.currentTarget.name);
    const Space = () => updateSelection(event.currentTarget.name);
    return { Space, Enter }[event.code];
  };

  const setRowElements = (element: HTMLElement | null, val: string) => {
    rowRefs[val] = element;
    setRowRefs(rowRefs);
  };

  return (
    <Section>
      <Table>
        <Table.Head>
          <Table.Row>
            {['Checked', ...objectKeys(elements[0])].map((item) => (
              <Table.Header key={item} children={item} />
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {elements.map((item) => (
            <Table.Row
              key={item.name}
              ref={(node) => setRowElements(node, item.name)}
              data-row-selected={selected.includes(item.name) || undefined}
            >
              <Table.Cell>
                <button
                  role="checkbox"
                  name={item.name}
                  value={item.name}
                  onClick={onChange}
                  onKeyDown={onKeyDown}
                  children={
                    selected.includes(item.name) ? (
                      <Icon name="checkbox_checked" />
                    ) : (
                      <Icon name="checkbox_unchecked" />
                    )
                  }
                />
              </Table.Cell>
              <Table.Cell>{item.position}</Table.Cell>
              <Table.Cell>{item.mass}</Table.Cell>
              <Table.Cell>{item.symbol}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Section>
  );
};

const DemoImage = () => {
  const defaultSrc = 'https://placehold.co/600x400?text=Placeholder';
  return (
    <Section>
      <Image alt="image" src={defaultSrc} />
    </Section>
  );
};

interface SearchItem {
  id: string;
  url: string;
  icon: ICON;
  label: string;
  search: string;
  description: string;
}

const SEARCH_DATA: SearchItem[] = [
  {
    id: 'a94ue23xlp7v8hsk',
    url: '/',
    icon: 'document',
    label: 'Overview',
    search: 'route/routes/page/pages/home/overview/summary/index/info/welcome/intro/introduction',
    description: 'Some route description here.',
  },
  {
    id: 'jsoda324lmlnk234',
    url: '/contact',
    icon: 'document',
    label: 'Contact',
    search: 'route/routes/page/pages/contact/phone/email/location/email/social/links/card/address',
    description: 'Some route description here.',
  },
  {
    id: 'lmlnk2bensa32434',
    url: '/toolbox',
    icon: 'document',
    label: 'Toolbox',
    search: `route/routes/page/pages/toolbox/tech/technologies/languages/frameworks/framework/tests/testing/stack/javascript/typescript/front-end/next/node/nodejs/react/css/html/scss/sass/jest`,
    description: 'Some route description here.',
  },
  {
    id: 'fdaoidfn203nlk22',
    url: '/sandbox',
    icon: 'document',
    label: 'Sandbox',
    search: `route/routes/page/pages/sandbox/ui/components/library/design/design system/core/colors/user interface/interface/portfolio`,
    description: 'Some route description here.',
  },
  {
    id: 'sdu32kjb209fdaks',
    url: '/demo',
    icon: 'document',
    label: 'Demo',
    search: 'route/routes/page/pages/demo/test/work/construction/temporary',
    description: 'Some route description here.',
  },
];

interface UseSearchProps {
  data: SearchItem[];
  limit?: number;
}

function useSearch({ data, limit }: UseSearchProps) {
  const [query, setQuery] = React.useState<string>('');

  const deferredQuery = React.useDeferredValue(query);
  const totalResults = data.length - 1;
  const numOfResults = limit ? totalResults - limit : totalResults;

  const isQuery = query.length > 1;
  const isStale = query !== deferredQuery ? 1 : 0.5;

  const getResults = React.useCallback(() => {
    const update = () => {
      return data.filter((item) => {
        const clean = query.toLowerCase();
        const filters = {
          label: item.label.toLowerCase().includes(clean),
          search: item.search.toLowerCase().split('/').includes(clean),
          description: item.description.toLowerCase().includes(clean),
        };

        if (filters.label || filters.search || filters.description) {
          return item;
        }
      });
    };

    return update().slice(limit ? numOfResults : 0);
  }, [query, data, limit]);

  const onInputChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event ?? {};
    if (currentTarget.value) {
      setQuery(currentTarget.value);
    }
  }, []);

  return {
    query: deferredQuery,
    isStale,
    isQuery,
    getResults,
    onInputChange,
  };
}

interface SearchResultProps {
  results: SearchItem[];
  onNavigate: (url: string) => void;
}

const SearchResult = (props: SearchResultProps) => {
  const { results, onNavigate } = props;
  return (
    <div className="sec-demo-search-result">
      {(results || []).map((item) => (
        <SearchItem key={item.id} item={item} onNavigate={onNavigate} />
      ))}
    </div>
  );
};

interface SearchItemProps {
  item: SearchItem;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onNavigate: (url: string) => void;
}

const SearchItem = (props: SearchItemProps) => {
  const { item, onClick, onNavigate } = props;
  const { label, description, id, url } = item;
  return (
    <button
      id={id}
      className="sec-demo-search-item"
      onClick={(event) => {
        onClick?.(event);
        onNavigate?.(url);
      }}
    >
      <span>
        <Title>{label}</Title>
        <Text>{description}</Text>
      </span>
    </button>
  );
};

interface SearchBoxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = (props: SearchBoxProps) => {
  const { onChange } = props;
  return (
    <div className="sec-demo-search-box">
      <input className="sec-demo-search-box-input" type="text" onChange={onChange} />
    </div>
  );
};

const DemoSearch = () => {
  const navigate = useNavigate();
  const { getResults, onInputChange, isQuery } = useSearch({
    data: SEARCH_DATA,
    limit: 2,
  });

  return (
    <Section className="sec-demo-search">
      <SearchBox onChange={onInputChange} />
      <SearchResult results={isQuery ? getResults() : []} onNavigate={navigate} />
    </Section>
  );
};

export const Demo: DemoRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero title="Demo" />
      <Page.Content>
        <DemoSearch />
        <DemoImage />
        <DemoTable />
      </Page.Content>
    </Page>
  );
};

Demo.displayName = '@v2/app/Route.Demo';
