import clsx from 'clsx';
import { factory } from '@/core/factory';
import { SidebarSelect } from './SidebarSelect';
import { Action, Box, Icon } from '@/core/components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Factory, GlobalRouteIcons, GlobalRoutePaths } from '@/types';

interface SidebarProps {}

type SidebarFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarProps;
  omits: 'children';
  comps: {
    Select: typeof SidebarSelect;
  };
}>;

const Sidebar = factory<SidebarFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box {...forwardedProps} ref={ref} component="div" className={clsx('v2-sidebar', className)}>
      <Action.Group orientation="vertical" value={location.pathname}>
        <Action
          label="Home"
          value={GlobalRoutePaths.home}
          icon={<Icon name={GlobalRouteIcons.home} />}
          onClick={(event) => navigate(event.currentTarget.value)}
          data-sidebar-item
        />

        <Action
          label="Experience"
          value={GlobalRoutePaths.experience}
          icon={<Icon name={GlobalRouteIcons.experience} />}
          onClick={(event) => navigate(event.currentTarget.value)}
          data-sidebar-item
        />

        <Action
          label="Projects"
          value={GlobalRoutePaths.projects}
          icon={<Icon name={GlobalRouteIcons.projects} />}
          onClick={(event) => navigate(event.currentTarget.value)}
          data-sidebar-item
        />

        <Action
          label="Toolbox"
          value={GlobalRoutePaths.toolbox}
          icon={<Icon name={GlobalRouteIcons.toolbox} />}
          onClick={(event) => navigate(event.currentTarget.value)}
          data-sidebar-item
        />

        <Action
          label="Sandbox"
          value={GlobalRoutePaths.sandbox}
          icon={<Icon name={GlobalRouteIcons.sandbox} />}
          onClick={(event) => navigate(event.currentTarget.value)}
          data-sidebar-item
        />

        <Action.Spacer />

        <Action
          value="ltr"
          label="writing direction control"
          icon={<Icon name="ltr" />}
          data-sidebar-item
        />

        <Action
          value="dark"
          label="theme mode control"
          icon={<Icon name="modeDark" />}
          data-sidebar-item
        />

        <Action
          value="blue"
          label="accent color control"
          icon={<Icon name="palette" />}
          data-sidebar-item
        />

        <Action
          label="Settings"
          value={GlobalRoutePaths.settings}
          icon={<Icon name={GlobalRouteIcons.settings} />}
          onClick={(event) => navigate(event.currentTarget.value)}
          data-sidebar-item
        />
      </Action.Group>
    </Box>
  );
});

Sidebar.displayName = '@v2/Sidebar';
export { Sidebar, type SidebarProps };
