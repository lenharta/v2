import * as React from 'react';
import { Button, Title } from '@/common';
import { Placement } from '@/types/common';

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

export const Sandbox = () => {
  const [isPlacement, setPlacement] = React.useState<Placement>('bottom');

  return (
    <div className="sandbox">
      <div className="sandbox-content">
        <Title>Sandbox</Title>
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
