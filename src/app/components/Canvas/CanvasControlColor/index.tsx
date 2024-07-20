import { Divider, Icon, UnstyledButton } from '@core';
import { CanvasDisplayState } from '../types';

const canvasColorData = [
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'mint', label: 'Mint' },
  { value: 'teal', label: 'Teal' },
  { value: 'cyan', label: 'Cyan' },
  { value: 'blue', label: 'Blue' },
  { value: 'indigo', label: 'Indigo' },
  { value: 'purple', label: 'Purple' },
  { value: 'pink', label: 'Pink' },
  { value: 'brown', label: 'Brown' },
];

interface CanvasControlColorProps {
  setState: (prop: keyof CanvasDisplayState, value: any) => void;
  state: CanvasDisplayState;
}

function formatAccentToken(value: string, alpha: number = 0.32) {
  return `rgba(var(--c-rgb-${value}), ${alpha})`;
}

const CanvasControlColor: React.FC<CanvasControlColorProps> = (props) => {
  const { state, setState } = props;
  return (
    <div className="v2-canvas-color">
      <Divider label="Accent Color" />
      <div className="v2-canvas-color-list">
        {canvasColorData.map((item) => (
          <UnstyledButton
            key={item.value}
            title={item.label}
            style={{ backgroundColor: formatAccentToken(item.value) }}
            onClick={() => setState('accent', item.value)}
            selected={!!(state.accent === item.value) || undefined}
            className="v2-canvas-color-item"
          >
            {!!(state.accent === item.value) && (
              <Icon
                name="check-circle"
                style={{ color: formatAccentToken(item.value, 1) }}
                className="v2-canvas-color-icon"
              />
            )}
          </UnstyledButton>
        ))}
      </div>
    </div>
  );
};

CanvasControlColor.displayName = '@v2/Canvas.Control.Color';
export { CanvasControlColor };
