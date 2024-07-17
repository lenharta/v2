import { Core, Theme } from '@types';
import { IconProps } from '../Icon';

type ControlPosition = Record<'height' | 'width' | 'left' | 'top', number>;

interface ControlThemeProps {
  variant?: Theme.Variant | undefined;
}

interface UseControlPositionProps {
  initialPosition: ControlPosition;
  currentValue: string;
}

type ControlItem = Core.Item & {
  icon?: Partial<IconProps> | undefined;
  iconPosition?: 'end' | 'start' | undefined;
};

type ControlItemParsed = Core.ItemParsed & {
  icon?: Partial<IconProps> | undefined;
  iconPosition?: 'end' | 'start' | undefined;
};

interface UseControlPositionReturn {
  refs: Record<string, HTMLElement | null>;
  trackRef: React.RefObject<HTMLDivElement>;
  thumbRef: React.RefObject<HTMLDivElement>;
  update: (segment: HTMLElement | null, track: HTMLDivElement | null) => void;
  setElementRefs: (element: HTMLElement | null, key: string) => void;
}

interface ControlProps extends ControlThemeProps {
  value: string;
  items: ControlItem[];
  onItemChange: (value: string) => void;
  className?: string | undefined;
  trapFocus?: boolean | undefined;
  orientation?: Core.Orientation | undefined;
}

interface ControlSegmentProps extends ControlThemeProps {
  refs: Record<string, HTMLElement | null>;
  item: ControlItemParsed;
  value: string;
  trapFocus: boolean;
  orientation?: Core.Orientation | undefined;
  trackRef: React.RefObject<HTMLDivElement>;
  update: (segment: HTMLElement | null, track: HTMLDivElement | null) => void;
  onItemChange: (value: string) => void;
  setElementRefs: (element: HTMLElement | null, key: string) => void;
}

interface ControlThumbProps extends ControlThemeProps {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  transitionEasing: React.CSSProperties['transitionTimingFunction'];
  transitionProperty: React.CSSProperties['transitionProperty'];
  transitionDuration: React.CSSProperties['transitionDuration'];
}

interface ControlTrackProps extends ControlThemeProps {
  className?: string | undefined;
  orientation: Core.Orientation | undefined;
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
