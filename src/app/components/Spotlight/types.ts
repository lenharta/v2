import { Theme } from '@/types';

export declare namespace Spotlight {
  export type Store = {
    dir: Theme.State['dir'];
    mode: Theme.State['mode'];
    icons: Theme.State['icons'];
    accent: Theme.State['accent'];
    contrast: Theme.State['contrast'];
  };

  export type Reducer = (state: Store, update: Partial<Store>) => Store;

  export type Disptach = (update: Partial<Store>) => void;

  export type Context = {
    dispatch: Disptach;
    state: Store;
  };

  export type RootProps = {};

  export type InputBaseProps = {
    loading?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    selected?: boolean | undefined;
  };

  export type InputItem = InputBaseProps & {
    value?: string | number | readonly string[] | undefined;
    label?: string | undefined;
  };

  export type InputProps = InputItem & {};

  export type MenuProps = {};

  export type MetaProps = {};

  export type PanelProps = {};

  export type DisplayProps = {
    children: React.ReactNode;
  };
}
