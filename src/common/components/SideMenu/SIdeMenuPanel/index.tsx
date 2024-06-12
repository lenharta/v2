import { Action, Floating } from '@/core';
import { SideMenuOption } from '../SIdeMenuOption';
import { css, selectors } from '../sidemenu-constants';
import { SideMenuPanelProps } from '../sidemenu-types';

type SideMenuPanelFactory = React.FC<SideMenuPanelProps> & {
  Option: typeof SideMenuOption;
};

const SideMenuPanel: SideMenuPanelFactory = (props) => {
  const {
    open,
    items,
    store,
    scheme,
    variant,
    disabled,
    group,
    dispatch,
    onOpenChange,
    getIconVariant,
  } = props;

  return (
    <Floating.Box>
      <Action.Group
        {...selectors.panel.prop}
        parentSelector={selectors.panel.key}
        childSelector={selectors.option.key}
        className={css.panel}
        variant={variant}
        scheme={scheme}
      >
        {(items ?? []).map((item) => (
          <SideMenuPanel.Option
            key={item.value}
            open={open}
            group={group}
            store={store}
            disabled={disabled || item.disabled}
            dispatch={dispatch}
            onOpenChange={onOpenChange}
            getIconVariant={getIconVariant}
            {...item}
          />
        ))}
      </Action.Group>
    </Floating.Box>
  );
};

SideMenuPanel.Option = SideMenuOption;
SideMenuPanel.displayName = '@v2/SideMenu.Select.Panel';
export { SideMenuPanel };
