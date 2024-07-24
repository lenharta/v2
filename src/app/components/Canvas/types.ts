import { Theme } from '@types';

type CanvasControlType = 'toggle' | 'segmented' | 'string' | 'select' | 'color';

type CanvasControl<
  T extends CanvasControlType = CanvasControlType,
  P extends Record<string, any> = Record<string, any>,
> = {
  type: T;
  prop: string;
} & P;

type CanvasControlToggleProps = {
  prop: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

type CanvasControlToggleOptions = CanvasControl<'toggle', { initialValue: boolean }>;

type CanvasControlSelectItem = { value: string; label: string };

type CanvasControlSelectData = (string | CanvasControlSelectItem)[];

type CanvasControlSelectOptions = CanvasControl<
  'select',
  { data: CanvasControlSelectData; initialValue: string }
>;

type CanvasControlSelectProps = {
  data: CanvasControlSelectData;
  prop: string;
  value: string;
  onChange: (value: string) => void;
};

type CanvasControlSegmentedItem = {
  value: string;
  label: string;
};

type CanvasControlSegmentedData = (string | CanvasControlSegmentedItem)[];

type CanvasControlSegmentedOptions = CanvasControl<
  'segmented',
  { data: CanvasControlSegmentedData; initialValue: string }
>;

type CanvasControlSegmentedProps = {
  data: CanvasControlSegmentedData;
  prop: string;
  value: string;
  onChange: (value: string) => void;
};

// type CanvasControlColorProps = {};

// type CanvasControlColorSwatchProps = {};

type CanvasControlOptions =
  | CanvasControlToggleOptions
  | CanvasControlSelectOptions
  | CanvasControlSegmentedOptions;

interface CanvasProps {
  children: React.ReactNode;
  controls: CanvasControlOptions[];
}

interface CanvasControlsProps {
  children: React.ReactNode;
  displayState: CanvasDisplayState;
  setDisplayState: (prop: keyof CanvasDisplayState, value: any) => void;
}

interface CanvasDisplayState {
  dir: Theme.Dir;
  mode: Theme.Mode;
  accent: Theme.Color;
  contrast: 'yes' | 'no';
}

export type {
  CanvasProps,
  CanvasControl,
  CanvasControlType,
  CanvasControlToggleProps,
  CanvasControlToggleOptions,
  CanvasControlOptions,
  CanvasControlSelectItem,
  CanvasControlSelectData,
  CanvasControlSelectOptions,
  CanvasControlSelectProps,
  CanvasControlSegmentedItem,
  CanvasControlSegmentedData,
  CanvasControlSegmentedOptions,
  CanvasControlSegmentedProps,
  CanvasDisplayState,
  CanvasControlsProps,
};
