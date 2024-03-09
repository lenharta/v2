import { Button, Popover, Title } from '@/common';

export const Sandbox = () => {
  return (
    <div className="sandbox">
      <div className="sandbox-content">
        <Title>Sandbox</Title>
        <div className="sandbox-demo-popover">
          <Popover>
            <Popover.Target>
              <Button className="sandbox-demo-popover-target">Popover Target</Button>
            </Popover.Target>
            <Popover.Floating>
              <div className="sandbox-demo-popover-floating">Popover Floating Element</div>
            </Popover.Floating>
          </Popover>
        </div>
      </div>
    </div>
  );
};
