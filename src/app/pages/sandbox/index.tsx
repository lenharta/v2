import * as React from 'react';
import { Button, Popover, Title } from '@/common';
import { Placement } from '@/types/common';
import { usePopoverCTX } from '@/common/Popover/context';

const placementData: Placement[] = [
  'top',
  'left',
  'right',
  'bottom',
  'top-start',
  'left-start',
  'right-start',
  'bottom-start',
  'top-end',
  'left-end',
  'right-end',
  'bottom-end',
];

const ExampleFloatingElement = () => {
  const ctx = usePopoverCTX();
  return (
    <div className="sandbox-demo-popover-floating">
      <p>{ctx.placement}</p>
      <p>X: {ctx.x}</p>
      <p>Y: {ctx.y}</p>
    </div>
  );
};

export const Sandbox = () => {
  const [isPlacement, setPlacement] = React.useState<Placement>('bottom');

  return (
    <div className="sandbox">
      <div className="sandbox-content">
        <Title>Sandbox</Title>
        <div className="sandbox-demo-popover">
          <Popover placement={isPlacement}>
            <Popover.Target>
              <Button className="sandbox-demo-popover-target">0000000</Button>
            </Popover.Target>
            <Popover.Floating>
              <ExampleFloatingElement />
            </Popover.Floating>
          </Popover>
        </div>
        <div className="sandbox-controls">
          {placementData.map((placement) => {
            return (
              <Button
                key={placement}
                onClick={() => setPlacement(placement)}
                className="sandbox-controls-option"
                aria-label={placement}
                children={placement}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
