import { factory, getTokenValue } from '@/core';
import { App, Factory } from '@/types';

interface SidebarColorProps {
  accent: App.Store['accent'];
}

type SidebarColorFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarColorProps;
}>;

const SidebarColor = factory<SidebarColorFactory>((props, ref) => {
  const { accent, style, ...forwardedProps } = props;
  return (
    <div
      {...forwardedProps}
      className="v2-sidebar-color-icon"
      style={{ ...style, backgroundColor: getTokenValue(`c-${accent}`) }}
      ref={ref}
    />
  );
});

export { SidebarColor, type SidebarColorProps };
