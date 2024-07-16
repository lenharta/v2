import { ToggleProps } from '@/core';

type CanvasControlType = 'toggle' | 'segment' | 'string' | 'select';

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

type CanvasControlOptions = CanvasControlToggleOptions | CanvasControlSelectOptions;

interface CanvasProps {
  children: React.ReactNode;
  controls: CanvasControlOptions[];
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
};
