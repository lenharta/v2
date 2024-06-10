import { Floating } from '@/core';
import { SideMenuPanel } from '../SIdeMenuPanel';
import { SideMenuTarget } from '../SideMenuTarget';
import { SideMenuSelectProps } from '../SideMenu.types';

type SideMenuSelectFactory = React.FC<SideMenuSelectProps> & {
  Panel: typeof SideMenuPanel;
  Target: typeof SideMenuTarget;
};

const SideMenuSelect: SideMenuSelectFactory = (props) => {
  const { items, open, store, group, scheme, variant, disabled, dispatch, onOpenChange } = props;
  return (
    <Floating
      isOpen={open[group]}
      placement="right-start"
      onChange={() => {
        if (!disabled) onOpenChange({ ...open, [group]: !open[group] });
      }}
    >
      <SideMenuSelect.Target
        open={open}
        store={store}
        group={group}
        scheme={scheme}
        variant={variant}
        disabled={disabled}
      />

      <SideMenuSelect.Panel
        open={open}
        store={store}
        group={group}
        items={items}
        scheme={scheme}
        variant={variant}
        disabled={disabled}
        dispatch={dispatch}
        onOpenChange={onOpenChange}
      />
    </Floating>
  );
};

SideMenuSelect.Panel = SideMenuPanel;
SideMenuSelect.Target = SideMenuTarget;
SideMenuSelect.displayName = '@v2/SideMenu.Select';
export { SideMenuSelect };
