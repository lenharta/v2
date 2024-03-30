import { Icon, IconName } from '@/common';
import { ElementProps } from '@/types';

export interface ToolbarProps extends ElementProps<'aside'> {}

interface ToolbarItemObj {
  id: string;
  icon: IconName;
}

export const Toolbar = (props: ToolbarProps) => {
  const { ...otherProps } = props;
  return (
    <aside {...otherProps} className="toolbar-layout">
      <div className="toolbar-content">
        <div className="toolbar-content--left">
          <span>Content Left</span>
        </div>
        <div className="toolbar-content--right">
          <span>Content Right</span>
        </div>
      </div>
    </aside>
  );
};
