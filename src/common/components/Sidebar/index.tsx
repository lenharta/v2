import clsx from 'clsx';
import { factory } from '@/core/factory';
import { SidebarSelect } from './SidebarSelect';
import { Action, Box, Icon, Icons } from '@/core/components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Factory, GlobalAccentColors, GlobalRouteIcons, GlobalRoutePaths } from '@/types';
import {
  lookupThemeModeIcon,
  lookupWritingModeIcon,
  useStoreDispatch,
  useStoreState,
} from '@/store';
import { capitalizeString } from '@/utils';

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
  const dispatch = useStoreDispatch();
  const store = useStoreState();

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

        <Sidebar.Select
          data-sidebar-item
          label="Writing Direction"
          value={store.dir}
          icon={lookupWritingModeIcon[store.dir]}
          items={[
            { icon: 'ltr', label: 'Left To Right', value: 'ltr' },
            { icon: 'rtl', label: ' Right To Left', value: 'rtl' },
          ]}
        />

        <Sidebar.Select
          data-sidebar-item
          label="Theme Mode"
          value={store.mode}
          icon={lookupThemeModeIcon[store.mode]}
          items={[
            { icon: 'modeLight', label: 'Light Mode', value: 'light' },
            { icon: 'modeDark', label: 'Dark Mode', value: 'dark' },
            { icon: 'modeDim', label: 'Dim Mode', value: 'dim' },
          ]}
        />

        <Sidebar.Select
          data-sidebar-item
          label="Writing Direction"
          value={store.dir}
          icon="palette"
          items={Object.keys(GlobalAccentColors).map((item) => ({
            icon: 'circleFilled',
            value: item,
            label: capitalizeString(item),
          }))}
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

Sidebar.Select = SidebarSelect;
Sidebar.displayName = '@v2/Sidebar';
export { Sidebar, type SidebarProps };
