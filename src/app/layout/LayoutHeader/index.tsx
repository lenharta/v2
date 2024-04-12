import { useNavigate } from 'react-router-dom';
import { LayoutHeaderLeft, LayoutHeaderLeftComponent } from './LayoutHeaderLeft';
import { LayoutHeaderRight, LayoutHeaderRightComponent } from './LayoutHeaderRight';

export type LayoutHeaderComponent = React.FC<{}> & {
  Left: LayoutHeaderLeftComponent;
  Right: LayoutHeaderRightComponent;
};

export const LayoutHeader: LayoutHeaderComponent = ({}) => {
  const navigate = useNavigate();
  return (
    <header className="layout-header">
      <LayoutHeader.Left navigate={navigate} />
      <LayoutHeader.Right navigate={navigate} />
    </header>
  );
};

LayoutHeader.displayName = '@v2/app/Layout.Header';
LayoutHeader.Left = LayoutHeaderLeft;
LayoutHeader.Right = LayoutHeaderRight;
