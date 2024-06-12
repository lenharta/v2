import { Store, Theme } from '@/types';
import { IconProps } from '@/core';

type SearchItem = {
  value: string;
  label: string;
  text?: string | undefined;
  tags?: string[] | undefined;
  icon?: IconProps['name'] | undefined;
  disabled?: boolean | undefined;
};

interface SearchThemeProps {
  scheme: Theme.Scheme;
  variant: 'default' | 'elevated';
}

interface SearchProps extends Partial<SearchThemeProps> {}

interface SearchTargetProps extends SearchThemeProps {
  store: Store.State;
}

interface SearchBoxProps extends SearchThemeProps {
  store: Store.State;
  dispatch: (store: Partial<Store.State>) => void;
}

interface SearchBoxClearProps extends SearchThemeProps {
  store: Store.State;
}

interface SearchBoxInputProps extends SearchThemeProps {}

interface SearchResultProps extends SearchThemeProps {
  store: Store.State;
  items: SearchItem[] | undefined;
  dispatch: (store: Partial<Store.State>) => void;
  navigate: (to: string) => void;
}

interface SearchResultListProps {
  children?: React.ReactNode | undefined;
}

interface SearchResultItemProps extends SearchThemeProps {
  value: string;
  label: string;
  text?: string | undefined;
  tags?: string[] | undefined;
  icon?: IconProps['name'] | undefined;
  disabled?: boolean | undefined;
  navigate: (to: string) => void;
}

export type {
  SearchProps,
  SearchBoxProps,
  SearchBoxClearProps,
  SearchTargetProps,
  SearchBoxInputProps,
  SearchResultProps,
  SearchResultListProps,
  SearchResultItemProps,
};
