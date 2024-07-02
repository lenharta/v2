import { Floating, Text } from '@/core';

interface SideNavTooltipProps {
  label: string;
  id: string;
}

const SideNavTooltip: React.FC<SideNavTooltipProps> = (props) => {
  const { id, label } = props;
  return (
    <Floating.Box>
      <div className="v2-side-nav-tooltip" role="tooltip" id={id}>
        <div className="v2-side-nav-tooltip-layout">
          <Text size="xxs" className="v2-side-nav-tooltip-text" component="span">
            {label}
          </Text>
        </div>
      </div>
    </Floating.Box>
  );
};

SideNavTooltip.displayName = '@v2/Side.Nav.Tooltip';
export { SideNavTooltip };
