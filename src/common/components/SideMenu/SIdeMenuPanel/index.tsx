import { Action, Floating } from '@/core';
import { SideMenuOption } from '../SIdeMenuOption';
import { SideMenuPanelProps } from '../SideMenu.types';
import { SIDE_MENU_CSS, SIDE_MENU_SELECTORS } from '../SideMenu.constants';

type SideMenuPanelFactory = React.FC<SideMenuPanelProps> & {
  Option: typeof SideMenuOption;
};

const SideMenuPanel: SideMenuPanelFactory = (props) => {
  const { items, store, scheme, variant, disabled, group, dispatch, onOpenChange, open } = props;
  return (
    <Floating.Box>
      <Action.Group
        {...SIDE_MENU_SELECTORS.panel.prop}
        parentSelector={SIDE_MENU_SELECTORS.panel.key}
        childSelector={SIDE_MENU_SELECTORS.option.key}
        className={SIDE_MENU_CSS.panel}
        variant={variant}
        scheme={scheme}
      >
        {items.map((item) => (
          <SideMenuPanel.Option
            {...item}
            key={item.value}
            open={open}
            group={group}
            store={store}
            disabled={disabled || item.disabled}
            onOpenChange={onOpenChange}
            dispatch={dispatch}
          />
        ))}
      </Action.Group>
    </Floating.Box>
  );
};

SideMenuPanel.Option = SideMenuOption;
SideMenuPanel.displayName = '@v2/SideMenu.Select.Panel';
export { SideMenuPanel };
