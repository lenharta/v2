import { Core, Theme } from '@/types';

type ControlPosition = Record<'height' | 'width' | 'left' | 'top', number>;

type UseControlPositionProps = {
  initialPosition: ControlPosition;
  currentValue: string;
};

type UseControlPositionReturn = {
  refs: Record<string, HTMLElement | null>;
  trackRef: React.RefObject<HTMLDivElement>;
  thumbRef: React.RefObject<HTMLDivElement>;
  update: (segment: HTMLElement | null, track: HTMLDivElement | null) => void;
  setElementRefs: (element: HTMLElement | null, key: string) => void;
};

interface ControlProps {
  value: string;
  items: Core.Item[];
  onItemChange: (value: string) => void;
  className?: string | undefined;
  trapFocus?: boolean | undefined;
  orientation?: Theme.Orientation | undefined;
}

interface ControlSegmentProps {
  refs: Record<string, HTMLElement | null>;
  item: Core.ItemParsed;
  value: string;
  trapFocus: boolean;
  orientation?: Theme.Orientation | undefined;
  trackRef: React.RefObject<HTMLDivElement>;
  update: (segment: HTMLElement | null, track: HTMLDivElement | null) => void;
  onItemChange: (value: string) => void;
  setElementRefs: (element: HTMLElement | null, key: string) => void;
  css: {
    segment: string;
    segmentInner: string;
    segmentLabel: string;
  };
}

interface ControlThumbProps {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  transitionEasing: React.CSSProperties['transitionTimingFunction'];
  transitionProperty: React.CSSProperties['transitionProperty'];
  transitionDuration: React.CSSProperties['transitionDuration'];
}

interface ControlTrackProps {
  className?: string | undefined;
  orientation: Theme.Orientation | undefined;
}

export type {
  ControlPosition,
  UseControlPositionProps,
  UseControlPositionReturn,
  ControlSegmentProps,
  ControlThumbProps,
  ControlTrackProps,
  ControlProps,
};
