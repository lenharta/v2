import * as React from 'react';
import { Snippet } from '@/app/components/Snippet';

const sampleCode = `
const Counter = (props: { initialCount?: number | undefined }) => {
  const [count, setCount] = React.useState(props.initialCount);

  return (
    <div className='v2-counter-demo'>
      <span>{count}</span>
      <button onClick={() => setCount(initialCount)}>RESET</button>
      <button onClick={() => setCount(c => c + 1)}>INCREMENT</button>
      <button onClick={() => setCount(c => c - 1)}>DECREMENT</button>
    </div>
  )
}
`;

const CanvasSnippetDefault: React.FC<{}> = ({}) => {
  return (
    <div className="v2-canvas-snippet">
      <Snippet code={sampleCode} />
    </div>
  );
};

const CanvasSnippet: React.FC<{}> & {
  Default: typeof CanvasSnippetDefault;
} = ({}) => {
  return (
    <React.Fragment>
      <CanvasSnippet.Default />
    </React.Fragment>
  );
};

CanvasSnippet.Default = CanvasSnippetDefault;
CanvasSnippet.displayName = '@v2/Canvas.Snippet';
export { CanvasSnippet };
