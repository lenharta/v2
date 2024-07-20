import { CanvasControlColor } from '../CanvasControlColor';
import { CanvasControlsProps } from '../types';

function CanvasControls(props: CanvasControlsProps) {
  const { children, displayState, setDisplayState } = props;
  return (
    <div className="v2-canvas-controls">
      <CanvasControlColor state={displayState} setState={setDisplayState} />
      {children}
    </div>
  );
}

CanvasControls.displayName = '@v2/Canvas.Controls';
export { CanvasControls };
