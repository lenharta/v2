function CanvasControls(props: { children: React.ReactNode }) {
  return <div className="v2-canvas-controls">{props.children}</div>;
}

CanvasControls.displayName = '@v2/Canvas.Controls';
export { CanvasControls };
