import { Floating } from '@/core';
import { SideMenuPanel } from '../SIdeMenuPanel';
import { SideMenuTarget } from '../SideMenuTarget';
import { SideMenuSelectProps } from '../sidemenu-types';

type SideMenuSelectFactory = React.FC<SideMenuSelectProps> & {
  Panel: typeof SideMenuPanel;
  Target: typeof SideMenuTarget;
};

const SideMenuSelect: SideMenuSelectFactory = (props) => {
  const { items, open, store, group, scheme, variant, disabled, dispatch, onOpenChange } = props;

  const getIconVariant = (
    mode: typeof store.mode,
    value: typeof group,
    fallback: typeof store.icons
  ) => {
    if (value !== 'accent') return fallback;
    return mode === 'light' ? 'fill' : 'outline';
  };

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
        getIconVariant={getIconVariant}
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
        getIconVariant={getIconVariant}
      />
    </Floating>
  );
};

SideMenuSelect.Panel = SideMenuPanel;
SideMenuSelect.Target = SideMenuTarget;
SideMenuSelect.displayName = '@v2/SideMenu.Select';
export { SideMenuSelect };
