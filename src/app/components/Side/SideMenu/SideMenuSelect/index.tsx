import * as React from 'react';
import { Store, Theme } from '@/types';
import { Action, Floating, IconProps } from '@/core';

type SideMenuSelectProps<
  K extends keyof Store.Context['state'],
  T extends Theme.Color | Theme.Mode | Theme.Dir,
> = {
  data: { value: T; label: string; icon: Partial<IconProps> }[];
  group: { name: K; value: T; icon: Partial<IconProps> };
  onOpen?: (() => void) | undefined;
  onClose?: (() => void) | undefined;
};

const SideMenuSelect = <
  K extends keyof Store.Context['state'],
  T extends Theme.Color | Theme.Mode | Theme.Dir,
>(
  props: SideMenuSelectProps<K, T>
) => {
  const { data, group, onOpen, onClose } = props;
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Floating
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      onChange={setOpen}
      placement="right-start"
    >
      <Floating.Target>
        <Action icon={group.icon} aria-label="side menu target" />
      </Floating.Target>

      <Floating.Box>
        <div className="v2-app-side-menu-drawer">
          {data.map((item) => (
            <Action key={item.value} {...item} />
          ))}
        </div>
      </Floating.Box>
    </Floating>
  );
};

SideMenuSelect.displayName = '@v2/SideMenu.Select';
export { SideMenuSelect };
