import { useExhibit } from '@/hooks';
import { Button, Dropdown } from '@/common';

const DemoDropdown = () => {
  const [mounted, { toggle }] = useExhibit(false);
  return (
    <Dropdown isOpen={mounted} onChange={toggle}>
      <Dropdown.Target>
        <Button size="md">Dropdown Target</Button>
      </Dropdown.Target>
      <Dropdown.Box>
        <div className="demo-dropdown-box">Dropdown Box</div>
      </Dropdown.Box>
    </Dropdown>
  );
};

export const Sandbox = () => {
  return (
    <div className="Sandbox">
      <div
        style={{
          paddingBlock: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginInline: 'auto',
          outline: 'solid 2px indianred',
        }}
      >
        <div>
          <DemoDropdown />
        </div>
      </div>
    </div>
  );
};
