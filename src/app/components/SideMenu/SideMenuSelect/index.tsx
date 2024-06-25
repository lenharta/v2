import * as React from 'react';
import { Action, Floating } from '@/core';
import { SideMenuSelectProps } from '../SideMenu.types';

type SideMenuSelectFactory = React.FC<SideMenuSelectProps> & {};

const SideMenuSelect: SideMenuSelectFactory = (props) => {
  const {
    icon,
    isOpen,
    value,
    disabled,
    readOnly,
    selected,
    items,
    label,
    onOpen,
    onClose,
    onChange,
    onOpenChange,
  } = props;

  const targetRef = React.useRef<HTMLButtonElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);

  const onFocusTarget = () => {
    if (targetRef.current) {
      targetRef.current.focus();
    }
  };

  const onFocusDrawer = () => {
    if (drawerRef.current) {
      (drawerRef.current.firstChild as HTMLButtonElement).focus();
    }
  };

  const handleOpen = () => {
    onFocusDrawer();
    onOpen?.();
  };

  const handleClose = () => {
    onFocusTarget();
    onClose?.();
  };

  return (
    <Floating
      isOpen={isOpen}
      onOpen={handleOpen}
      onClose={handleClose}
      onChange={(isOpen) => onOpenChange?.(isOpen)}
      placement="right-start"
      disabled={disabled}
      offset={{ crossAxis: -2 }}
    >
      <Floating.Target>
        <Action
          ref={targetRef}
          icon={icon}
          value={value}
          label={label}
          disabled={disabled}
          readOnly={readOnly}
          selected={selected}
          className="v2-sidemenu-select-target"
        />
      </Floating.Target>

      <Floating.Box>
        <Action.Group
          gap="xs"
          ref={drawerRef}
          value={value}
          orientation="horizontal"
          className="v2-sidemenu-select-drawer"
        >
          {items.map((item) => (
            <Action
              key={item.value as string}
              icon={item.icon}
              value={item.value}
              label={item.label}
              onClick={() => onChange(item.value)}
              disabled={item.disabled}
              readOnly={item.readOnly}
              className="v2-sidemenu-select-option"
            />
          ))}
        </Action.Group>
      </Floating.Box>
    </Floating>
  );
};

SideMenuSelect.displayName = '@v2/SideMenu.Select';
export { SideMenuSelect };
