import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useLocation } from 'react-router-dom';
import { Action, Box, Icon } from '@/core/components';

interface SidebarProps {}

type SidebarFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarProps;
  omits: 'children';
}>;

const Sidebar = factory<SidebarFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  const location = useLocation();
  return (
    <Box {...forwardedProps} ref={ref} component="div" className={clsx('v2-sidebar', className)}>
      <Action.Group orientation="vertical" value={location.pathname}>
        <Action value="/" label="Home" icon={<Icon name="home" />} />
        <Action value="/experience" label="Experience" icon={<Icon name="work" />} />
        <Action value="/projects" label="Projects" icon={<Icon name="project" />} />
        <Action value="/toolbox" label="Toolbox" icon={<Icon name="tools" />} />
        <Action value="/sandbox" label="Sandbox" icon={<Icon name="responsive" />} />
      </Action.Group>
    </Box>
  );
});

Sidebar.displayName = '@v2/Sidebar';
export { Sidebar, type SidebarProps };
