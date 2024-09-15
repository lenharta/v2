import { Store } from "../store";

export declare namespace DEMO {
  type State = {
    dir: Store.State['dir'];
    mode: Store.State['mode'];
    icons: Store.State['icons'];
    accent: Store.State['accent'];
  };

  type Dispatch = (payload: Partial<State>) => State;

  type ControlType = 'switch' | 'select' |  'checkbox' | 'segmented' | 'text';

  type ControlOption<T extends ControlType, P extends Record<string, any>> = P & {
    prop: string;
    type: T;
  };

  type ControlOptions = 
    | ControlOptionsSelect

  type ControlSelectItem = {
    value: string;
    label: string;
  };

  type ControlSelectProps = {
    data: (string | ControlSelectItem)[];
    onChange: (value: string) => void;
    value: string;
    prop: string;
  };
  
  type ControlOptionsSelect = ControlOption<'select', {
    data: (string | ControlSelectItem)[];
    onChange: (value: string) => void;
    value: string;
    prop: string;
  }>;

}