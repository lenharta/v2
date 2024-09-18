import { Store } from "../store";

export declare namespace DEMO {
  type State = {
    dir: Store.State['dir'];
    mode: Store.State['mode'];
    icons: Store.State['icons'];
    accent: Store.State['accent'];
  };

  type Dispatch = (payload: Partial<State>) => State;

  // type ControlType = 'switch' | 'select' |  'checkbox' | 'segmented' | 'text';
  type ControlType = 'switch' | 'select' |  'checkbox' | 'segmented';

  type ControlOption<T extends ControlType, P extends Record<string, any>> = P & {
    prop: string;
    type: T;
  };

  type ControlOptions = 
    | ControlSelectOptions
    | ControlSwitchOptions
    | ControlCheckboxOptions
    | ControlSegmentedOptions;

  type ControlSwitchProps = {
    prop: string;
    value: boolean;
    onChange: (value: boolean) => void;
  };

  type ControlSwitchOptions = ControlOption<'switch', {
    initialValue: boolean;
  }>;

  type ControlCheckboxProps = {
    prop: string;
    value: boolean;
    onChange: (value: boolean) => void;
  };

  type ControlCheckboxOptions = ControlOption<'checkbox', {
    initialValue: boolean;
  }>;

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
  
  type ControlSelectOptions = ControlOption<'select', {
    data: (string | ControlSelectItem)[];
    initialValue: string;
  }>;

  type ControlSegmentedItem = {
    value: string;
    label: string;
  }

  type ControlSegmentedProps = {
    data: (string | ControlSelectItem)[];
    onChange: (value: string) => void;
    value: string;
    prop: string;
  };
  
  type ControlSegmentedOptions = ControlOption<'segmented', {
    data: (string | ControlSelectItem)[];
    initialValue: string;
  }>;
}