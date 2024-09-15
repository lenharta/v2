import { useDemoContext } from '../Demo.context';

export type DemoCanvasProps = {
  children: React.ReactNode;
};

export const DemoCanvas = (props: DemoCanvasProps) => {
  const { children } = props;
  const { state } = useDemoContext();

  const dataAttributes = {
    'data-prefers-dir': state.dir,
    'data-prefers-color-mode': state.mode,
    'data-prefers-color-accent': state.accent,
  };

  return (
    <div className="v2-demo-canvas" {...dataAttributes}>
      <div>{children}</div>
    </div>
  );
};
