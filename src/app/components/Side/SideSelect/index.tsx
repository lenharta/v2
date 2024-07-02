import { Action, Floating, IconProps } from '@/core';
import { Store } from '@/types';
import React from 'react';

interface SideSelectProps {
  group: { value: string; label: string; icon: Partial<IconProps> };
  items: { value: string; label: string; icon: Partial<IconProps> }[];
  name: keyof Store.Context['state'];
  store: Store.Context['state'];
  dispatch: Store.Context['dispatch'];
  onClose?: (() => void) | undefined;
  onOpen?: (() => void) | undefined;
}

type SideSelectFactory = React.FC<SideSelectProps>;

const SideSelect: SideSelectFactory = (props) => {
  const { group, items, name, store, onOpen, onClose, dispatch } = props;
  const [isOpen, setOpen] = React.useState(false);

  const handleOpen = () => {
    dispatch({ sideOpen: true });
    onOpen?.();
  };

  const handleClose = () => {
    dispatch({ sideOpen: undefined });
    onClose?.();
  };

  return (
    <Floating
      isOpen={isOpen}
      placement="right-start"
      onChange={setOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      offset={{ crossAxis: -2 }}
    >
      <Floating.Target>
        <Action icon={group.icon} aria-label={group.label} selected={isOpen || undefined} />
      </Floating.Target>

      <Floating.Box>
        <div className="v2-app-side-select-drawer">
          <div className="v2-app-side-select-drawer-layout">
            {(items ?? []).map((item) => (
              <Action
                key={item.value}
                icon={item.icon}
                value={item.value}
                onClick={(event) => dispatch({ [name]: event.currentTarget.value })}
                selected={group.value === item.value || undefined}
                aria-label={item.label}
              />
            ))}
          </div>
        </div>
      </Floating.Box>
    </Floating>
  );
};

SideSelect.displayName = '@v2/Side.Select';
export { SideSelect, type SideSelectProps };
